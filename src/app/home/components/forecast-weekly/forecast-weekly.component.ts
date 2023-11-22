import { Component, Input, OnInit } from '@angular/core';
import { DailyMeasurement } from '../../../models/weather-report.model';

@Component({
  selector: 'app-forecast-weekly',
  templateUrl: './forecast-weekly.component.html',
  styleUrls: ['./forecast-weekly.component.scss'],
})
export class ForecastWeeklyComponent {
  @Input()
  weeklyWeather!: DailyMeasurement[] | undefined;
}
