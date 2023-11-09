import { Component, OnInit, Input , EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mostrar-dados-outra-table',
  templateUrl: './mostrar-dados-outra-table.component.html',
  styleUrls: ['./mostrar-dados-outra-table.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MostrarDadosOutraTableComponent implements OnInit{

  displayedColumns: string[] = ['id', 'autor', 'titulo', 'tipoDeLivro', 'categoria', 'entretenimento'];
  data: any; // Declare a property to hold the data
  @Input() idSelecionado: number = 0;

  constructor(private dataService: DataService)  {}

  ngOnInit() {
    this.atualizar();
    /*this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response; // Assign the response data to the 'data' property
      },
      (error) => {
        console.error('Erro na chamada da API:', error);
      }
    );*/
  }

  atualizar() {
    if(this.idSelecionado === 0){
      this.dataService.fetchData().subscribe(
        (response) => {
          this.data = response; // Assign the response data to the 'data' property
        },
        (error) => {
          console.error('Erro na chamada da API:', error);
        }
      );
    }else{
      this.dataService.getById(this.idSelecionado).subscribe(
        (response) => {
          this.data = response; // Assign the response data to the 'data' property
        },
        (error) => {
          console.error('Erro na chamada da API:', error);
        }
      );
    }
  }

  onInputChange(id: number) {
    // Ative o método atualizar quando o evento inputChange for acionado.
    this.teste();
  }

  teste() {
    console.log('Método atualizar ativado.');
    // Adicione aqui a lógica que deseja executar ao atualizar.
  }
}
