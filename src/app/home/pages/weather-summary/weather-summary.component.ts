import { Component } from '@angular/core';
import { WeatherStoreService } from '../../../services/weather.store.service';
import { filter } from 'rxjs';
import { isNotNullish } from '../../../app.component';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss'],
})
export class WeatherSummaryComponent {
  public weather$ = this.weatherStoreService.weather$.pipe(
    filter(isNotNullish)
  );

  public constructor(
    private readonly weatherStoreService: WeatherStoreService
  ) {}
}
