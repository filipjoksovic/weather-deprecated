export interface GeolocationCityModel {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
}

export const defaultGeolocationCityModel = (): GeolocationCityModel => {
  return <GeolocationCityModel>{
    id: '-1',
    name: '',
    latitude: -1,
    longitude: -1,
    country_code: '',
  };
};
