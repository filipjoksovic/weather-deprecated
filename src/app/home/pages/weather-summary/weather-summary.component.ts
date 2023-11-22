import { Component } from '@angular/core';
import { WeatherStoreService } from '../../../services/weather.store.service';
import { filter, Observable } from 'rxjs';
import { isNotNullish } from '../../../app.component';
import {
  GeolocationService,
  isDefaultLocationState,
} from '../../../services/geolocation.service';
import { WeatherReportModel } from '../../../models/weather-report.model';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss'],
})
export class WeatherSummaryComponent {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public weather$: Observable<WeatherReportModel | null> =
    this.weatherStoreService.weather$.pipe(filter(isNotNullish));

  public location$ = this.locationService.location$.pipe(
    filter(location => !isDefaultLocationState(location))
  );

  public constructor(
    private readonly weatherStoreService: WeatherStoreService,
    private readonly locationService: GeolocationService
  ) {}
}
