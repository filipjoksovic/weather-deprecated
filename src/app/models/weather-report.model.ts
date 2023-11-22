import {
  DailyMeasurementResponse,
  DailyUnitsResponse,
  HourlyMeasurmentResponse,
  HourlyUnitsResponse,
  WeatherApiResponseModel,
} from './weather-api-response.model';

export interface WeatherReportModel {
  latitude: number;
  longitude: number;
  current_measurement: CurrentMeasurment;
  hourly_measurements: HourlyMeasurment[];
  daily_measurements: DailyMeasurement[];
}

export interface DailyMeasurement {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

export interface HourlyMeasurment {
  time: string;
  temperature_2m: string;
  precipitation_probability: string;
  rain: string;
  showers: string;
  snowfall: string;
}

export interface CurrentMeasurment {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  is_day: boolean;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
}

export const fromWeatherApiResponseToWeatherModelMapper = (
  data: WeatherApiResponseModel
): WeatherReportModel => {
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    current_measurement: {
      time: data.current.time,
      interval: `${data.current.interval} ${data.current_units.interval}`,
      temperature_2m: `${data.current.temperature_2m} ${data.current_units.temperature_2m}`,
      apparent_temperature: `${data.current.apparent_temperature} ${data.current_units.apparent_temperature}`,
      is_day: Boolean(data.current.is_day),
      precipitation: `${data.current.precipitation} ${data.current_units.precipitation}`,
      rain: `${data.current.rain} ${data.current_units.rain}`,
      showers: `${data.current.showers} ${data.current_units.showers}`,
      snowfall: `${data.current.snowfall} ${data.current_units.snowfall}`,
      wind_speed_10m: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
      wind_direction_10m: `${data.current.wind_direction_10m} ${data.current_units.wind_direction_10m}`,
    },
    hourly_measurements: fromResponseToModelHourlyMeasurmentMapper(
      data.hourly_units,
      data.hourly
    ),
    daily_measurements: fromResponseToModelDailyMeasurementMapper(
      data.daily_units,
      data.daily
    ),
  };
};

export const fromResponseToModelDailyMeasurementMapper = (
  dailyUnits: DailyUnitsResponse,
  daily: DailyMeasurementResponse
): DailyMeasurement[] => {
  const dailyMeasurements: DailyMeasurement[] = [];
  daily.time.forEach((time: string, index: number) => {
    const dailyMeasurement: DailyMeasurement = {
      time: time,
      temperature_2m_max: `${daily.temperature_2m_max[index]} ${dailyUnits.temperature_2m_max}`,
      temperature_2m_min: `${daily.temperature_2m_min[index]} ${dailyUnits.temperature_2m_min}`,
    };
    dailyMeasurements.push(dailyMeasurement);
  });
  return dailyMeasurements;
};
export const fromResponseToModelHourlyMeasurmentMapper = (
  hourlyUnits: HourlyUnitsResponse,
  hourly: HourlyMeasurmentResponse
): HourlyMeasurment[] => {
  const hourlyMeasurements: HourlyMeasurment[] = [];
  hourly.time.forEach((time: string, index: number) => {
    const hourlyMeasurment: HourlyMeasurment = {
      time: time,
      temperature_2m: `${hourly.temperature_2m[index]} ${hourlyUnits.temperature_2m}`,
      precipitation_probability: `${hourly.precipitation_probability[index]} ${hourlyUnits.precipitation_probability}`,
      rain: `${hourly.rain[index]} ${hourlyUnits.rain}`,
      showers: `${hourly.showers[index]} ${hourlyUnits.showers}`,
      snowfall: `${hourly.snowfall[index]} ${hourlyUnits.snowfall}`,
    };
    hourlyMeasurements.push(hourlyMeasurment);
  });
  return hourlyMeasurements;
};
