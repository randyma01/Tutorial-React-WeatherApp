export const getWeather = async (city) => {
  const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
