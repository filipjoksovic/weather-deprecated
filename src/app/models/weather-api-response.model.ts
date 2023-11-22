export interface DailyMeasurementResponse {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  wind_speed_10m_max: number[];
  wind_gusts_10m_max: number[];
  wind_direction_10m_dominant: number[];
}

export interface WeatherApiResponseModel extends DailyMeasurementResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnitsResponse;
  current: CurrentMeasurementResponse;

  hourly_units: HourlyUnitsResponse;
  hourly: HourlyMeasurmentResponse;

  daily_units: DailyUnitsResponse;
  daily: DailyMeasurementResponse;
}

export interface DailyUnitsResponse {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  wind_speed_10m_max: string;
  wind_gusts_10m_max: string;
  wind_direction_10m_dominant: string;
}

export interface CurrentUnitsResponse {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  is_day: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
}

export interface CurrentMeasurementResponse {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

export interface HourlyUnitsResponse {
  time: string;
  temperature_2m: string;
  precipitation_probability: string;
  rain: string;
  showers: string;
  snowfall: string;
}

export interface HourlyMeasurmentResponse {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
  rain: number[];
  showers: number[];
  snowfall: number[];
}
