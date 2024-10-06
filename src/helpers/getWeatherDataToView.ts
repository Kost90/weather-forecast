import { weatherIcons, weatherCondition } from '../constants/app-constants';
import { IWeatherDataToView } from '../constants/types';

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWeatherDataToView = (data: any[]): IWeatherDataToView[] => {
  const response = data[0];
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const daily = response.daily()!;

  const weatherData = {
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        t => new Date((t + utcOffsetSeconds) * 1000),
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      windSpeed10mMax: daily.variables(3)!.valuesArray()!,
    },
  };

  console.log(weatherData);

  const result: IWeatherDataToView[] = weatherData.daily.time.slice(0, 5).map((date, index) => {
    const weatherCode = weatherData.daily.weatherCode[index];
    const temperature2mMax = weatherData.daily.temperature2mMax[index];
    const temperature2mMin = weatherData.daily.temperature2mMin[index];
    const windSpeed10mMax = weatherData.daily.windSpeed10mMax[index];

    return {
      date: date.toISOString().split('T')[0],
      dayOfWeek: date.toLocaleString('en-EN', { weekday: 'long' }),
      icon: weatherIcons[weatherCode],
      condition: weatherCondition[weatherCode],
      maxTemperature: parseFloat(temperature2mMax.toFixed(0)),
      minTemperature: parseFloat(temperature2mMin.toFixed(0)),
      windSpeed: parseFloat(windSpeed10mMax.toFixed(0)),
    };
  });

  return result;
};
