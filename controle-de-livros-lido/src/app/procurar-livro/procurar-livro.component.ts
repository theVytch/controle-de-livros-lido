import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-procurar-livro',
  templateUrl: './procurar-livro.component.html',
  styleUrls: ['./procurar-livro.component.css']
})
export class ProcurarLivroComponent{

  @Output() inputChange: EventEmitter<number> = new EventEmitter<number>();

  idSelecionado: number = 0;
  data: any;

  constructor(private dataService: DataService) {}

  atualizarTabela() {
    console.log('ed')
    this.inputChange.emit(this.idSelecionado);
  }
}
