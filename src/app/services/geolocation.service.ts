import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface GeolocationResponse {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}

export const defaultGeolocationState = (): GeolocationResponse => ({
  latitude: -1,
  longitude: -1,
  accuracy: -1
})

export const defaultGeoLocationErrorState = (): GeolocationError => ({
  code: -1,
  message: ""
})

export const isValidLocationState = (locationState: GeolocationResponse) => locationState.latitude !== -1 && locationState.longitude !== -1 && locationState.accuracy !== -1;
export const isDefaultLocationState = (locationState: GeolocationResponse) => locationState.latitude === -1 && locationState.longitude === -1 && locationState.accuracy === -1;

export const isValidLocationErrorStateFilter = (locationStateError: GeolocationError) => locationStateError.code !== -1 && locationStateError.message !== "";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private _location$: BehaviorSubject<GeolocationResponse> = new BehaviorSubject<GeolocationResponse>(defaultGeolocationState());
  public location$ = this._location$.asObservable();

  private _locationError$: BehaviorSubject<GeolocationError> = new BehaviorSubject<GeolocationError>(defaultGeoLocationErrorState());
  public locationError$ = this._locationError$.asObservable();

  constructor() {
  }

  public getGeolocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const {coords} = position;
      this._location$.next({
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy
      })
    }, (positionError) => {
      this._locationError$.next({
        code: positionError.code,
        message: positionError.message
      })
    }, options);


  }


}
