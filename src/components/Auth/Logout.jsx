import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import './Logout.css';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Clear any task data from localStorage if needed
    localStorage.removeItem('tasks');
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;