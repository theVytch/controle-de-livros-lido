import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { Livro } from '../entidade/Livro';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-comentario',
  templateUrl: './form-comentario.component.html',
  styleUrls: ['./form-comentario.component.css']
})

export class FormComentarioComponent implements OnInit{

  form: FormGroup;
  autorLivro: string = '';
  tituloLivro: string = '';
  categoriaLivro: string = '';
  tipoDeLivro: string = '';
  comentarioLivro!: string;

  data: any;
  receivedData: any;

  id: number = 0;
  livro!: Livro;
  lastDate!: Date;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      comentarioLivro: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.dataService.getLivroById(this.id).subscribe(livro => {
        this.livro = livro;
        if (livro.Comentario && livro.Comentario.comentario !== undefined) {
          this.form = this.formBuilder.group({
            comentarioLivro: [livro.Comentario.comentario]
          });
        } else {
          this.comentarioLivro = '';
        }
      });
    });

    this.dataService.getLivroById(this.id).subscribe(livro => {
      this.livro = livro;
      this.lastDate = livro.Comentario.ultimaAlteracao
    });
  }

  submitForm() {
    if (this.form.valid) {
      try {
        this.cadastrarComentarioNoLivro(this.id, this.livro, this.form.get('comentarioLivro')?.value);
        this.voltarParaTelaAnterior();
      } catch (error) {
        console.error('Erro ao salvar a entidade no localStorage:', error);
      }
    }
  }

  voltarParaTelaAnterior() {
    const url = '/#';
    this.router.navigateByUrl(url);
  }

  cadastrarComentarioNoLivro(id: number, livro: Livro, comentario: string) {
    livro.Comentario.comentario = comentario
    this.dataService.put(id, livro)
    .then((response) => {
      this.data = response;
      this.dataService.atualizarLista();
    })
    .catch((error) => {
      console.error('Erro na chamada da API:', error);
    });
  }
}
