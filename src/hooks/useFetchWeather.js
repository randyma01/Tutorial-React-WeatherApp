import { useEffect, useState } from 'react';

import { getWeather } from '../helpers/getWeather';

export const useFetchWeather = (city) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getWeatherCity = async () => {
    const response = await getWeather(city);
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeatherCity();
    // eslint-disable-next-line
  }, []);

  return {
    data,
    isLoading,
  };
};
