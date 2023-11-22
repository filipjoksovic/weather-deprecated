import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { BehaviorSubject, take } from 'rxjs';
import { WeatherReportModel } from '../models/weather-report.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherStoreService {
  private readonly _weather$: BehaviorSubject<WeatherReportModel | null> =
    new BehaviorSubject<WeatherReportModel | null>(null);
  public readonly weather$ = this._weather$.asObservable();

  private readonly _weatherError$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public readonly weatherError$ = this._weatherError$.asObservable();
  constructor(private readonly weatherService: WeatherService) {}

  public getWeather() {
    this.weatherService
      .getWeather()
      .pipe(take(1))
      .subscribe({
        next: (data: WeatherReportModel) => {
          this._weather$.next(data);
        },
        error: (error: unknown) => {
          this._weatherError$.next(true);
        },
      });
  }
}
