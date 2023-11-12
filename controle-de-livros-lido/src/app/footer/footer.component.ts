import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'appDateFormat'
})
export class AppDateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'HH:mm:ss'): any {
    if (value instanceof Date) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, format);
    }
    return value;
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number;
  currentDate: Date = new Date();

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {

  }
}

