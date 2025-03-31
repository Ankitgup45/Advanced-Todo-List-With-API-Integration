import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
  } from '../types';
  import { fetchWeatherData } from '../../utils/api';
  
  export const getWeatherData = (city) => {
    return async (dispatch) => {
      try {
        const weatherData = await fetchWeatherData(city);
        dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: weatherData
        });
      } catch (error) {
        dispatch({
          type: FETCH_WEATHER_FAILURE,
          payload: error.message
        });
      }
    };
  };