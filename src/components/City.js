import React from 'react';
import { dateBuilder } from '../helpers/dateBuilder';

export const City = (weather) => {
  return typeof weather.main != 'undefined' ? (
    <div>
      <div className="location-container">
        <div className="location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="date"> {dateBuilder()}</div>
      </div>
      <div className="weather-container">
        <div className="temperature">{Math.round(weather.main.temp)}°C</div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
    </div>
  ) : (
    ''
  );
};
