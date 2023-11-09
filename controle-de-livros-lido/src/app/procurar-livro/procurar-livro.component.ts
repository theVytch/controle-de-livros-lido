import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-procurar-livro',
  templateUrl: './procurar-livro.component.html',
  styleUrls: ['./procurar-livro.component.css']
})
export class ProcurarLivroComponent{

  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  tituloLivro: string = '';
  data: any;

  constructor(private dataService: DataService) {}

  atualizarTabela() {
    this.dataService.atualizarLista();
  }
}
