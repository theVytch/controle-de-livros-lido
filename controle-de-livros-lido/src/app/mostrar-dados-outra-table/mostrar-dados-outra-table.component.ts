import { Component, OnInit, Input , EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Livro } from '../entidade/Livro';

@Component({
  selector: 'app-mostrar-dados-outra-table',
  templateUrl: './mostrar-dados-outra-table.component.html',
  styleUrls: ['./mostrar-dados-outra-table.component.css']
})
export class MostrarDadosOutraTableComponent implements OnInit{

  displayedColumns: string[] = ['id', 'autor', 'titulo', 'tipoDeLivro', 'categoria', 'entretenimento'];
  data: Livro[] = [];
  @Input() tituloLivro: string = '';

  constructor(private dataService: DataService)  {
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
}
