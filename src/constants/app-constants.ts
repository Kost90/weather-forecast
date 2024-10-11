import { Sun, CloudSun, Cloud, CloudSnow, ThermometerSun, Snowflake, Wind, CloudFog, CloudRain, CloudRainWind, CloudLightning, Icon } from "lucide-react";


export const geocodingApiUrl: string = 'https://geocoding-api.open-meteo.com/v1/';
export const weatherApiUrl:string = 'https://api.open-meteo.com/v1/forecast';

export const weatherIcons: { [key: number]: typeof Icon } = {
  0: Sun,
  1: CloudSun,
  2: CloudSun,
  3: Cloud,
  25: CloudSnow,
  29: ThermometerSun,
  30: Snowflake,      
  31: Wind,         
  32: Wind,           
  45: CloudFog,       
  48: CloudFog,       
  61: CloudRain,     
  63: CloudRain,      
  65: CloudRain,      
  66: CloudRain,      
  67: CloudRain,      
  80: CloudRainWind, 
  81: CloudRainWind, 
  82: CloudRainWind,  
  85: CloudSnow,     
  86: CloudSnow,      
  95: CloudLightning, 
  96: CloudLightning, 
  99: CloudLightning, 
};

export const weatherCondition: { [key: number]: string } = {
  0: 'Clear sky',
  1: 'Mostly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  25: 'Ice pellets',
  29: 'Hot',
  30: 'Cold',
  31: 'Windy',
  32: 'Very windy',
  45: 'Fog',
  48: 'Freezing fog',
  61: 'Light rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light rain showers',
  67: 'Heavy rain showers',
  80: 'Showers',
  81: 'Heavy showers',
  82: 'Violent showers',
  85: 'Light snow',
  86: 'Heavy snow',
  95: 'Thunderstorms',
  96: 'Thunderstorms with hail',
  99: 'Thunderstorms with hail',
};
