import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import WeatherInfo from './components/Weather/WeatherInfo';
import Logout from './components/Auth/Logout';
import './App.css';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div className="todo-app">
          <div className="header-container">
            <h1 ><strong>Advanced To-Do App</strong></h1>
            <Logout />
          </div>
          <WeatherInfo />
          <TaskInput />
          <TaskList />
        </div>
      )}
    </div>
  );
}

export default App;