import { Pipe, PipeTransform } from '@angular/core';
import { ValueUnitPair } from '../../models/weather-report.model';

@Pipe({
  name: 'displayValueWithUnit',
})
export class DisplayValueWithUnitPipe implements PipeTransform {
  transform(
    value: ValueUnitPair<string | number>,
    ...args: unknown[]
  ): unknown {
    return value.value + ' ' + value.unit;
  }
}
