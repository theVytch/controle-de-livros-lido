import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-de-livros-lido';
  dataFromParent: string = 'Enviado do pai';

  currentDate : Date;

  constructor(){
    this.currentDate = new Date();
  }

  ngOnInit(): void{
    setInterval(() => {
      this.currentDate = new Date();
    })
  }

  handleChildEvent(eventData: string) {
    this.dataFromParent = eventData;
  }
}
