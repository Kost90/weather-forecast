import { useState, useCallback } from 'react';
import Form from '../form/Form';
import { IWeatherDataToView } from '../../constants/types';
import WeatherDataView from '../weatherDataView/WeatherDataView';

function WeatherDataPriview() {
  const [data, setData] = useState<IWeatherDataToView[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationName, setLocationName] = useState<string>('');

  const handelChangeLocationName = useCallback((data: string) => {
    setLocationName(data);
  }, []);

  const handelSubmit = useCallback((data: IWeatherDataToView[]) => {
    setData(data);
  }, []);

  const handelChangeError = useCallback((data: string | null) => {
    setError(data);
  }, []);

  const handelChangeLoading = useCallback((value: boolean) => {
    setLoading(value);
  }, []);

  console.log(data);

  return (
    <>
      <Form
        handelChangeLocationName={handelChangeLocationName}
        onSubmit={handelSubmit}
        handelChangeError={handelChangeError}
        handelChangeLoading={handelChangeLoading}
        loading={loading}
      />
      {error ? (
        <h1 style={{ color: 'red', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>{error}</h1>
      ) : null}
      <h1>{locationName}</h1>
      <WeatherDataView data={data} />
    </>
  );
}

export default WeatherDataPriview;
