import { LocationCoordinates, LocationResponse } from '../constants/types';

export const getLatitudeLongitude = (data: LocationResponse[]): LocationCoordinates => {
  const coordinates: LocationCoordinates[] = data.map(el => ({
    latitude: parseFloat(el.latitude.toFixed(2)),
    longitude: parseFloat(el.longitude.toFixed(2)),
  }));

  return coordinates[0];
};
