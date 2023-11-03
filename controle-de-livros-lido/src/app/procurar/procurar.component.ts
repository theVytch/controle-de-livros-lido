import { Component } from '@angular/core';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.css']
})
export class ProcurarComponent {

  message: string = '';
  mostrarElementos: boolean = true;
  inputValue: string = '';

  changeMessage() {
    this.message = this.inputValue;
  }

  changeVisibility(){
    this.mostrarElementos = !this.mostrarElementos;
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.replace(/[0-9]/g, '');
    inputElement.value = sanitizedValue;
    this.inputValue = sanitizedValue;
  }

  dataFromParent: string = 'Enviado do pai';

  handleChildEvent(eventData: string) {
    this.dataFromParent = eventData;
  }
}
