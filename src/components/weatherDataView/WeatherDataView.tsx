import { memo } from 'react';
import { IWeatherDataToView } from '../../constants/types';
import styles from './index.module.css';
import WeatherDataViewItem from '../weatherDataViewItem/WeatherDataViewItem';

interface IWeatherDataToViewProps {
  data: IWeatherDataToView[];
}

const WeatherDataView = memo(({ data }: IWeatherDataToViewProps) => {
  return (
    <div className={styles.weatherDataViewWrapper}>
      {data.map((element, index) => (
        <WeatherDataViewItem element={element} key={`${element.windSpeed}${index}}`} />
      ))}
    </div>
  );
});

export default WeatherDataView;
