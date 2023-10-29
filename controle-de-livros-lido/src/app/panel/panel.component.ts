import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent {
  @ViewChild('panelElement') panelElement!: ElementRef;

  isYellow = true;

  toggleColor() {
    const panel = this.panelElement.nativeElement;
    if (this.isYellow) {
      panel.style.backgroundColor = 'orange';
    } else {
      panel.style.backgroundColor = 'yellow';
    }
    this.isYellow = !this.isYellow;
  }
}
