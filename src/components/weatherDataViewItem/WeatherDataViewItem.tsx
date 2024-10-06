import { memo } from 'react';
import { IWeatherDataToView } from '../../constants/types';
import styles from './index.module.css';

interface IWeatherDataViewItemProps {
  element: IWeatherDataToView;
}

const WeatherDataViewItem = memo(({ element }: IWeatherDataViewItemProps) => {
  return (
    <div className={styles.weatherDataToViewItem}>
      <p style={{fontWeight:"bold"}}>
        {element.dayOfWeek}/{element.date}
      </p>
      <p>{element.icon}</p>
      <p>{element.condition}</p>
      <p>
        {element.minTemperature}°C  - {element.maxTemperature}°C 
      </p>
      <p>wind speed: {element.windSpeed} m/s</p>
    </div>
  );
});

export default WeatherDataViewItem;
