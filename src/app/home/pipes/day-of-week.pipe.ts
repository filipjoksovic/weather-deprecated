import { Pipe, PipeTransform } from '@angular/core';
import getDay from 'date-fns/getDay';
import { format } from 'date-fns';

@Pipe({
  name: 'dayOfWeek',
})
export class DayOfWeekPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return format(new Date(value), 'EEEE');
  }
}
