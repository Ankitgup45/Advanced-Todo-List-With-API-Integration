import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../types';

const initialState = {
  weatherData: null,
  error: null
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        error: null
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        weatherData: null,
        error: action.payload
      };
    default:
      return state;
  }
}