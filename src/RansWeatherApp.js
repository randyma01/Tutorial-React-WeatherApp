import React, { useState } from 'react';

import { City, Title } from './components';

import { getWeather } from './helpers';

const RansWeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const onInputChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getWeather(query);
    setWeather(data);
    setQuery('');
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 18
            ? 'App hot'
            : 'App cold'
          : 'App'
      }
    >
      <main>
        <Title />

        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={onInputChange}
              value={query}
            />
          </form>
        </div>

        <City {...weather} />
      </main>
    </div>
  );
};

export default RansWeatherApp;
