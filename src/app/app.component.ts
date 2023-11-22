import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { WeatherStoreService } from './services/weather.store.service';
import {
  GeolocationService,
  isValidLocationState,
} from './services/geolocation.service';

export const isNotNullish = (data: unknown) =>
  data !== undefined && data !== null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather';

  constructor(
    private readonly weatherStoreService: WeatherStoreService,
    private geoLocationService: GeolocationService
  ) {
    this.geoLocationService.location$
      .pipe(filter(isValidLocationState))
      .subscribe({
        next: location => {
          this.weatherStoreService.getWeather(
            location.latitude,
            location.longitude
          );
        },
      });
  }
}
