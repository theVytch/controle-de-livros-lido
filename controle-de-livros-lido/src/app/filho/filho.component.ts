import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {
  dataFromParent: string = 'filho enviando para pai';
  mostrarBtn: boolean = true;

  @Input() inputData: string = '';
  @Output() outputEvent: EventEmitter<string> = new EventEmitter();

  enviarParaComponentePai() {
    const dataToSend = "Enviado do filho";
    this.outputEvent.emit(dataToSend);
    this.mostrarBtn = !this.mostrarBtn;
  }
}
