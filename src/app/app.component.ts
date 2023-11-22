import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { filter, map } from 'rxjs';
import { fromWeatherApiResponseToWeatherModelMapper } from './models/weather-report.model';
import { WeatherStoreService } from './services/weather.store.service';

export const isNotNullish = (data: unknown) =>
  data !== undefined && data !== null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather';

  constructor(private readonly weatherStoreService: WeatherStoreService) {
    this.weatherStoreService.getWeather();
    this.weatherStoreService.weather$
      .pipe(filter(isNotNullish))
      .subscribe(data => {
        console.log('Weather received', data);
      });
  }
}
