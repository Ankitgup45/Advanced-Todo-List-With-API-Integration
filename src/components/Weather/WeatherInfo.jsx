import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from '../../redux/actions/weatherActions';
import './WeatherInfo.css';

const WeatherInfo = () => {
  const [city, setCity] = useState('London');
  const weatherData = useSelector(state => state.weather.weatherData);
  const error = useSelector(state => state.weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, [city, dispatch]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  if (error) {
    return <div className="weather-error">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div className="weather-loading">Loading weather data...</div>;
  }

  return (
    <div className="weather-info">
      <div className="weather-header">
        <h3>Weather Information</h3>
        <select value={city} onChange={handleCityChange} className="city-select">
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Sydney">Sydney</option>
          <option value="Paris">Paris</option>
        </select>
      </div>
      <div className="weather-details">
        <div className="weather-main">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <span className="weather-temp">{Math.round(weatherData.main.temp)}°C</span>
        </div>
        <div className="weather-secondary">
          <p>{weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;