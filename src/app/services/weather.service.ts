import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  public getWeather(lat: number, long: number): Observable<WeatherReportModel> {
    return this.http
      .get<WeatherApiResponseModel>(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: lat,
          longitude: long,
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
            'cloud_cover',
            'pressure_msl',
            'surface_pressure',
          ],
          hourly: [
            'temperature_2m',
            'precipitation_probability',
            'rain',
            'showers',
            'snowfall',
          ],
          daily: [
            'weather_code',
            'temperature_2m_max',
            'temperature_2m_min',
            'wind_speed_10m_max',
            'wind_gusts_10m_max',
            'wind_direction_10m_dominant',
          ],
        },
      })
      .pipe(map(fromWeatherApiResponseToWeatherModelMapper));
  }
}
