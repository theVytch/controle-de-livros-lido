import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mostrar-dados',
  templateUrl: './mostrar-dados.component.html',
  styleUrls: ['./mostrar-dados.component.css']
})
export class MostrarDadosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'autor', 'titulo', 'tipoDeLivro', 'categoria', 'entretenimento'];
  data: any;

  constructor(private dataService: DataService) {
    this.dataService.atualizarLista$.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.dataService.fetchData()
      .then((response) => {
        this.data = response;
      })
      .catch((error) => {
        console.error('Erro na chamada da API:', error);
      });
  }
}
