import { LOGIN, LOGOUT } from '../types';

const initialState = {
  isAuthenticated: false,  // Always start as not authenticated
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}