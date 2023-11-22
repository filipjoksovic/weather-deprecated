import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { GeolocationApiResponseModel } from '../models/geolocation-api-response.model';
import {
  defaultGeolocationCityModel,
  GeolocationCityModel,
} from '../models/geolocation-city.model';

@Injectable({
  providedIn: 'root',
})
export class LocationSearchService {
  private _locationNotFound$: Subject<boolean> = new Subject<boolean>();
  public locationNotFound$ = this._locationNotFound$.asObservable();

  constructor(private readonly http: HttpClient) {}

  public searchForSingleLocation(
    param: string
  ): Observable<GeolocationCityModel> {
    return this.searchForLocations(param).pipe(
      tap(data => {
        if (data.length === 0) {
          this._locationNotFound$.next(true);
        } else {
          this._locationNotFound$.next(false);
        }
      }),
      map(data => (data.length > 0 && data[0]) || defaultGeolocationCityModel())
    );
  }

  public searchForLocations(
    param: string,
    count = 1
  ): Observable<GeolocationCityModel[]> {
    return this.http
      .get<GeolocationApiResponseModel>(
        `https://geocoding-api.open-meteo.com/v1/search`,
        {
          params: {
            name: param,
            count: count,
          },
        }
      )
      .pipe(map(data => data.results ?? []));
  }
}
