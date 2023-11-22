import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as https from 'https';
import * as http from 'http';
import { HttpClient } from '@angular/common/http';
import { WeatherApiResponseModel } from '../models/weather-api-response.model';
import {
  fromWeatherApiResponseToWeatherModelMapper,
  WeatherReportModel,
} from '../models/weather-report.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  public getWeather(): Observable<WeatherReportModel> {
    return this.http
      .get<WeatherApiResponseModel>(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: 52.52,
          longitude: 13.41,
          current: [
            'temperature_2m',
            'relative_humidity_2m',
            'apparent_temperature',
            'is_day',
            'precipitation',
            'rain',
            'showers',
            'snowfall',
            'wind_speed_10m',
            'wind_direction_10m',
          ],
          hourly: [
            'temperature_2m',
            'precipitation_probability',
            'rain',
            'showers',
            'snowfall',
          ],
          daily: ['temperature_2m_max', 'temperature_2m_min'],
        },
      })
      .pipe(map(fromWeatherApiResponseToWeatherModelMapper));
  }
}
