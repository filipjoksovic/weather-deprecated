import { Component, Input } from '@angular/core';
import { CurrentMeasurment } from '../../../models/weather-report.model';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss'],
})
export class ForecastDetailsComponent {
  @Input()
  currentWeather: CurrentMeasurment | undefined;
}
