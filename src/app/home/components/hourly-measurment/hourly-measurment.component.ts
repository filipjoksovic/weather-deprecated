import { Component, Input } from '@angular/core';
import { HourlyMeasurment } from '../../../models/weather-report.model';

@Component({
  selector: 'app-hourly-measurment',
  templateUrl: './hourly-measurment.component.html',
  styleUrls: ['./hourly-measurment.component.scss'],
})
export class HourlyMeasurmentComponent {
  @Input()
  measurment!: HourlyMeasurment;
}
