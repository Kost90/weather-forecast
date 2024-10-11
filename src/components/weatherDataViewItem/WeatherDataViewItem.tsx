import { memo } from 'react';
import { IWeatherDataToView } from '../../constants/types';
import styles from './index.module.css';

interface IWeatherDataViewItemProps {
  element: IWeatherDataToView;
}

const WeatherDataViewItem = memo(({ element }: IWeatherDataViewItemProps) => {
  const IconComponent: React.ElementType = element.icon;
  return (
    <div className={styles.weatherDataToViewItem}>
      <p style={{ fontWeight: 'bold' }}>
        {element.dayOfWeek}/{element.date}
      </p>
      <IconComponent size={32} color={element.condition === 'Clear sky' ? 'yellow' : '#49a9f4'} />
      <p>{element.condition}</p>
      <p>
        {element.minTemperature}°C - {element.maxTemperature}°C
      </p>
      <p>wind speed: {element.windSpeed} m/s</p>
    </div>
  );
});

export default WeatherDataViewItem;
