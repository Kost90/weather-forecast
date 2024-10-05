import React, { useState } from 'react';
import SearchInput from '../searchInput/SearchInput';
import styles from './index.module.css';
import Button from '../button/Button';
import GeocodingApi from '../../api/geocodingApi';
import { LocationResponse } from '../../constants/types';

type FormProps = {
  onSubmit: (data: LocationResponse[]) => void;
  handelChangeError: (data: string | null) => void;
  handelChangeLoading: (value: boolean) => void;
  loading: boolean;
};

function Form({ onSubmit, handelChangeError, handelChangeLoading, loading }: FormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);

  const handelChange = (value: string) => {
    setInputValue(value);
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Make validation in separate file
    if (inputValue.length < 3) {
      setFormError(true);
      return;
    }
    setFormError(false);
    handelChangeLoading(true);
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      const response = await GeocodingApi.getLocationData({
        query: `search?name=${inputValue}&count=1&language=en&format=json`,
        signal: signal,
      });
      if (!response.results) {
        throw new Error('Network Response is empty');
      }
      handelChangeError(null);
      // TODO: Make fetch function for weather data by received response of location geocode
      const data = response.results.map(element => element);
      // TODO: Make function for grab fields from data in separate file and after pass it to fetch weather function
      onSubmit(data);
      setInputValue('');
      handelChangeLoading(false);
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
          <Button text="Submit" type="submit" disabled={loading} />
        </div>
        {formError ? <p style={{ color: 'red' }}>Location name must be 3 letters or more</p> : null}
      </form>
    </>
  );
}

export default Form;
