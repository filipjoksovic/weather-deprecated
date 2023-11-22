import { Component, Input } from '@angular/core';
import {
  DailyMeasurement,
  HourlyMeasurment,
} from '../../../models/weather-report.model';

@Component({
  selector: 'app-forecast-daily',
  templateUrl: './forecast-daily.component.html',
  styleUrls: ['./forecast-daily.component.scss'],
})
export class ForecastDailyComponent {
  @Input()
  dailyWeather!: HourlyMeasurment[] | undefined;
}
