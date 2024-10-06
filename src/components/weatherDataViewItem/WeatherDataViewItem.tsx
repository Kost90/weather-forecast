import React from 'react'
import { IWeatherDataToView } from '../../constants/types';
import styles from './index.module.css'

interface IWeatherDataViewItemProps{
    element:IWeatherDataToView;
}

function WeatherDataViewItem({element}:IWeatherDataViewItemProps) {

  return (
    <div className={styles.weatherDataToViewItem}>
        <p>{element.dayOfWeek}/{element.date}</p>
        <p>{element.icon}</p>
        <p>{element.condition}</p>
        <p>{element.minTemperature} - {element.maxTemperature}</p>
        <p>{element.windSpeed}</p>
    </div>
  )
}

export default WeatherDataViewItem