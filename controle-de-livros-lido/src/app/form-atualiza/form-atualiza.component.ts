import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { Livro } from '../entidade/Livro';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-atualizar',
  templateUrl: './form-atualiza.component.html',
  styleUrls: ['./form-atualiza.component.css']
})

export class FormAtualizaComponent implements OnInit{

  form: FormGroup;
  autorLivro: string = '';
  tituloLivro: string = '';
  categoriaLivro: string = '';
  tipoDeLivro: string = '';
  radioCheckLido: boolean = true;

  data: any;
  receivedData: any;

  id: number = 0;
  livro?: Livro;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      autorLivro: ['', [Validators.required, regexValidator(/.+/i, 'O autor não pode estar vazio.')]],
      tituloLivro: ['', [Validators.required, regexValidator(/.+/i, 'O título não pode estar vazio.')]],
      categoriaLivro: ['', [Validators.required, regexValidator(/.+/i, 'A categoria não pode estar vazia.')]],
      radioCheckLido: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.dataService.getLivroById(this.id).subscribe(livro => {
        this.livro = livro;
        this.autorLivro = livro.autor;
        this.tituloLivro = livro.titulo;
        this.categoriaLivro = livro.categoria;
        this.radioCheckLido = livro.jaFoiLido;
        this.form.patchValue({ radioCheckLido: livro.jaFoiLido });
        const tipoLivro = livro.tipoDeLivro;
        if(tipoLivro === 'Estudo'){
          this.tipoDeLivro = 'Estudo';
        }else{
          this.tipoDeLivro = 'Entretenimento'
        }
      });
    });
  }

  submitForm() {
    if (this.form.valid) {
      const isChecked = this.form.get('radioCheckLido')?.value;
      const novoLivro = new Livro(this.autorLivro, this.tituloLivro, this.tipoDeLivro, this.categoriaLivro, isChecked);
      try {
        this.atualizaLivro(this.id ,novoLivro);
        this.voltarParaTelaAnterior()
      } catch (error) {
        console.error('Erro ao salvar a entidade no localStorage:', error);
      }
    }
  }

  voltarParaTelaAnterior() {
    const url = '/#';
    this.router.navigateByUrl(url);
  }

  atualizaLivro(id: number, livro: Livro) {
    this.dataService.put(id, livro)
    .then((response) => {
      this.data = response;
    })
    .catch((error) => {
      console.error('Erro na chamada da API:', error);
    });
  }
}

function regexValidator(regex: RegExp, errorMessage: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = regex.test(control.value);
    return valid ? null : { 'regex': { message: errorMessage } };
  };
}
