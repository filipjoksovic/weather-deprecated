import { GeolocationCityModel } from './geolocation-city.model';

export interface GeolocationApiResponseModel {
  results?: GeolocationCityModel[];
  generation_time: number;
}
