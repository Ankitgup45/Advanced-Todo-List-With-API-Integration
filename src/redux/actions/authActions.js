import { LOGIN, LOGOUT } from '../types';

export const login = (userData) => {
  return {
    type: LOGIN,
    payload: userData
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

// Remove the checkAuthState action entirely