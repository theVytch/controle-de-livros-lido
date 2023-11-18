import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../entidade/Livro';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})

export class FormCadastroComponent implements OnInit{

  form: FormGroup;
  autorLivro: string = '';
  tituloLivro: string = '';
  categoriaLivro: string = '';
  tipoDeLivro: string = '';

  data: any;
  receivedData: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
    this.form = this.formBuilder.group({
      autorLivro: ['', [Validators.required, regexValidator(/.+/i, 'O autor não pode estar vazio.')]],
      tituloLivro: ['', [Validators.required, regexValidator(/.+/i, 'O título não pode estar vazio.')]],
      categoriaLivro: ['', [Validators.required, regexValidator(/.+/i, 'A categoria não pode estar vazia.')]],
      radioCheckLido: [false]
    });
  }

  ngOnInit() {

  }

  submitForm() {
    if (this.form.valid) {
      const isChecked = this.form.get('radioCheckLido')?.value;
      const novoLivro = new Livro(this.autorLivro, this.tituloLivro, this.tipoDeLivro, this.categoriaLivro, isChecked);
      try {
        this.cadastrarLivro(novoLivro);
        this.dataService.atualizarLista();
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

  cadastrarLivro(livro: Livro) {
    this.dataService.post(livro)
    .then((response) => {
      this.data = response;
      this.dataService.atualizarLista();
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
