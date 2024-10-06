import React, { useCallback, useState } from 'react';
import SearchInput from '../searchInput/SearchInput';
import styles from './index.module.css';
import Button from '../button/Button';
import GeocodingApi from '../../api/geocodingApi';
import { ApiParams, IWeatherDataToView } from '../../constants/types';
import { getLatitudeLongitude } from '../../helpers/getLatitudeLongitude';
import { getWeatherDataToView } from '../../helpers/getWeatherDataToView';
import { inputValueValidator } from '../../validation/inputValueValidation';

type FormProps = {
  handelChangeLocationName: (data: string) => void;
  onSubmit: (data: IWeatherDataToView[]) => void;
  handelChangeError: (data: string | null) => void;
  handelChangeLoading: (value: boolean) => void;
  loading: boolean;
};

function Form({ handelChangeLocationName, onSubmit, handelChangeError, handelChangeLoading, loading }: FormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);

  const handelChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValueValidator(inputValue)) {
      setFormError(true);
      return;
    }

    setFormError(false);
    handelChangeLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await GeocodingApi.getLocationData({
        query: `search?name=${inputValue}&count=1&language=en&format=json`,
        signal: signal,
      });
      if (!response.results || response.results.length === 0) {
        throw new Error("Can't find any location for your request");
      }
      handelChangeError(null);
      handelChangeLocationName(response.results[0].name);
      const coordinates = getLatitudeLongitude(response.results);

      if (coordinates) {
        const params: ApiParams = {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'wind_speed_10m_max'],
          timezone: 'auto',
        };

        const weatherResponses = await GeocodingApi.fetchWeatherData(params);

        const dailyWeatherArray = getWeatherDataToView(weatherResponses);

        onSubmit(dailyWeatherArray);
        setInputValue('');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        handelChangeError(error.message);
      } else {
        handelChangeError('Unknown error occurred');
      }
    } finally {
      setInputValue('');
      handelChangeLoading(false);
    }
  };

  return (
    <>
      <form className={styles.formWrapper} onSubmit={handelSubmit}>
        <div className={styles.formElementsWrapper}>
          <SearchInput iputvalue={inputValue} onChange={handelChange} />
          <Button text={loading ? 'Loading' : 'Submit'} type="submit" disabled={loading} />
        </div>
        {formError ? <p style={{ color: 'red' }}>Location name must be 3 letters or more</p> : null}
      </form>
    </>
  );
}

export default Form;
