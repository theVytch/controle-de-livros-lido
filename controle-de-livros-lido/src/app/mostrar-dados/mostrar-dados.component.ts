import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mostrar-dados',
  templateUrl: './mostrar-dados.component.html',
  styleUrls: ['./mostrar-dados.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MostrarDadosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'autor', 'titulo', 'tipoDeLivro', 'categoria', 'entretenimento', 'acao'];
  data: any; // Declare a property to hold the data

  @Output() outputEvent: EventEmitter<string> = new EventEmitter();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response; // Assign the response data to the 'data' property
      },
      (error) => {
        console.error('Erro na chamada da API:', error);
      }
    );
  }

  enviarParaForm(row: any){
    this.outputEvent.emit(row);
  }
}
