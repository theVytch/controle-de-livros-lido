import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'appDateFormat'
})

export class AppDateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'dd/MM/yyyy'): any {
    if (value instanceof Date) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, format);
    } else if (typeof value === 'string') {
      const dateValue = new Date(value);
      if (!isNaN(dateValue.getTime())) {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(dateValue, format);
      }
    }
    return value;
  }
}
