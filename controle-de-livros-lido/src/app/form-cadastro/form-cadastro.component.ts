import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../entidade/Livro';
import { DataService } from '../data.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})

export class FormCadastroComponent{

  form: FormGroup;
  autorLivro: string = '';
  tituloLivro: string = '';
  categoriaLivro: string = '';
  tipoDeLivro: string = '';

  receivedData: any;
  data: any; // Declare a property to hold the data

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
    this.form = this.formBuilder.group({
      autorLivro: ['', [notEmpty]],
      tituloLivro: ['', [notEmpty]],
      categoriaLivro: ['', notEmpty],
      radioCheckLido: [false]
    });
  }

  submitForm() {
    if (this.form.valid) {
      const isChecked = this.form.get('radioCheckLido')?.value;
      const novoLivro = new Livro(this.autorLivro, this.tituloLivro, this.tipoDeLivro, this.categoriaLivro, isChecked);
      try {
        localStorage.setItem('livro', JSON.stringify(novoLivro));
        console.log('Entidade salva com sucesso no localStorage.');
        console.log(localStorage.getItem('livro'))
        this.cadastrarLivro(novoLivro);
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
    this.dataService.post(livro).subscribe(
      (response) => {
        this.data = response; // Assign the response data to the 'data' property
        console.log(this.data)
      },
      (error) => {
        console.error('Erro na chamada da API:', error);
      }
    );
  }
}

function notEmpty(control: AbstractControl) {
  return control.value.trim() === '' ? { 'notEmpty': true } : null;
}