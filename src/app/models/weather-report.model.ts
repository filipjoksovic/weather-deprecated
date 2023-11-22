import {
  DailyMeasurementResponse,
  DailyUnitsResponse,
  HourlyMeasurmentResponse,
  HourlyUnitsResponse,
  WeatherApiResponseModel,
} from './weather-api-response.model';
import { format, isToday } from 'date-fns';

export interface ValueUnitPair<T extends string | number> {
  value: T;
  unit: string;
}

export interface WeatherReportModel {
  latitude: number;
  longitude: number;
  current_measurement: CurrentMeasurment;
  hourly_measurements: HourlyMeasurment[];
  daily_measurements: DailyMeasurement[];
}

export interface DailyMeasurement {
  time: string;
  temperature_2m_max: ValueUnitPair<number>;
  temperature_2m_min: ValueUnitPair<number>;
  wind_speed_10m_max: ValueUnitPair<number>;
  wind_gusts_10m_max: ValueUnitPair<number>;
  wind_direction_10m_dominant: ValueUnitPair<number>;
}

export interface HourlyMeasurment {
  time: string;
  temperature_2m: ValueUnitPair<number>;
  precipitation_probability: ValueUnitPair<number>;
  rain: ValueUnitPair<number>;
  showers: ValueUnitPair<number>;
  snowfall: ValueUnitPair<number>;
}

export interface CurrentMeasurment {
  time: string;
  interval: ValueUnitPair<number>;
  temperature_2m: ValueUnitPair<number>;
  apparent_temperature: ValueUnitPair<number>;
  is_day: boolean;
  precipitation: ValueUnitPair<number>;
  rain: ValueUnitPair<number>;
  showers: ValueUnitPair<number>;
  snowfall: ValueUnitPair<number>;
  wind_speed_10m: ValueUnitPair<number>;
  wind_direction_10m: ValueUnitPair<number>;
}

export const fromWeatherApiResponseToWeatherModelMapper = (
  data: WeatherApiResponseModel
): WeatherReportModel => {
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    current_measurement: {
      time: data.current.time,
      interval: {
        value: data.current.interval,
        unit: data.current_units.interval,
      },
      temperature_2m: {
        value: data.current.temperature_2m,
        unit: data.current_units.temperature_2m,
      },
      apparent_temperature: {
        value: data.current.apparent_temperature,
        unit: data.current_units.apparent_temperature,
      },
      is_day: Boolean(data.current.is_day),
      precipitation: {
        value: data.current.precipitation,
        unit: data.current_units.precipitation,
      },
      rain: { value: data.current.rain, unit: data.current_units.rain },
      showers: {
        value: data.current.showers,
        unit: data.current_units.showers,
      },
      snowfall: {
        value: data.current.snowfall,
        unit: data.current_units.snowfall,
      },
      wind_speed_10m: {
        value: data.current.wind_speed_10m,
        unit: data.current_units.wind_speed_10m,
      },
      wind_direction_10m: {
        value: data.current.wind_direction_10m,
        unit: data.current_units.wind_direction_10m,
      },
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
      temperature_2m_max: {
        value: daily.temperature_2m_max[index],
        unit: dailyUnits.temperature_2m_max,
      },
      temperature_2m_min: {
        value: daily.temperature_2m_min[index],
        unit: dailyUnits.temperature_2m_min,
      },
      wind_direction_10m_dominant: {
        value: daily.wind_direction_10m_dominant[index],
        unit: dailyUnits.wind_direction_10m_dominant,
      },
      wind_gusts_10m_max: {
        value: daily.wind_gusts_10m_max[index],
        unit: dailyUnits.wind_gusts_10m_max,
      },
      wind_speed_10m_max: {
        value: daily.wind_speed_10m_max[index],
        unit: dailyUnits.wind_speed_10m_max,
      },
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
    if (isToday(new Date(time))) {
      console.log(format(new Date(time), 'MM/dd/yyyy'));
      const hourlyMeasurment: HourlyMeasurment = {
        time: format(new Date(time), 'HH:mm'),
        temperature_2m: {
          value: hourly.temperature_2m[index],
          unit: hourlyUnits.temperature_2m,
        },
        precipitation_probability: {
          value: hourly.precipitation_probability[index],
          unit: hourlyUnits.precipitation_probability,
        },
        rain: { value: hourly.rain[index], unit: hourlyUnits.rain },
        showers: { value: hourly.showers[index], unit: hourlyUnits.showers },
        snowfall: { value: hourly.snowfall[index], unit: hourlyUnits.snowfall },
      };
      hourlyMeasurements.push(hourlyMeasurment);
    }
  });
  return hourlyMeasurements;
};
