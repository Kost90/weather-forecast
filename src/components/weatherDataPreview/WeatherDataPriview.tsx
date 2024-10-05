import React, { useState, useCallback } from 'react';
import Form from '../form/Form';
import { LocationResponse } from '../../constants/types';

function WeatherDataPriview() {
  const [data, setData] = useState<LocationResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handelSubmit = useCallback((data: LocationResponse[]) => {
    setData(data);
  }, []);

  const handelChangeError = useCallback((data: string | null) => {
    setError(data);
  }, []);

  const handelChangeLoading = useCallback((value: boolean) => {
    setLoading(value);
  }, []);

  return (
    <>
      <Form
        onSubmit={handelSubmit}
        handelChangeError={handelChangeError}
        handelChangeLoading={handelChangeLoading}
        loading={loading}
      />
      {error ? <h1>{error}</h1> : null}
    </>
  );
}

export default WeatherDataPriview;
