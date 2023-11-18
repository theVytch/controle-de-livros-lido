import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Livro } from '../entidade/Livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-dados-tela-procura',
  templateUrl: './mostrar-dados-tela-procura.component.html',
  styleUrls: ['./mostrar-dados-tela-procura.component.css']
})
export class MostrarDadosTelaProcuraComponent implements OnInit{

  displayedColumns: string[] = ['id', 'autor', 'titulo', 'tipoDeLivro', 'categoria', 'jaFoiLido', 'acao'];
  data: Livro[] = [];

  @Input() tituloLivro: string = '';

  constructor(private dataService: DataService, private router: Router)  {
    this.dataService.atualizarLista$.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.atualizar();
  }

  atualizar()  {
    if (this.tituloLivro === '') {
      this.dataService.fetchData()
        .then((response) => {
          this.data = response;
        })
        .catch((error) => {
          console.error('Erro na chamada da API:', error);
        });
    } else {
      this.dataService.getLivrosByTitulo(this.tituloLivro)
        .subscribe(
          (response: Livro[]) => {
            this.data = response;
          },
          (error) => {
            console.error('Erro na chamada da API:', error);
          }
        );
    }
  }

  enviarLivroParaEditar(row: any) {
    const id = row.id;
    this.router.navigate([`/atualiza/${id}`]);
  }

  deletarLivro(row: any){
    const livro = row;
    const confirmarExclusao = window.confirm(`Tem certeza de que deseja excluir o livro: ${livro.titulo}?`);
    if (confirmarExclusao) {
    this.dataService.deleteById(livro.id);
    this.atualizar();
  }
  }

  enviarLivroParaEditarComentario(row: any) {
    const id = row.id;
    this.router.navigate([`/comentario/${id}`]);
  }
}
