import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK_PRIORITY
  } from '../types';
  
  const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  };
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TASK:
        const newTasksAdd = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(newTasksAdd));
        return {
          ...state,
          tasks: newTasksAdd
        };
      case DELETE_TASK:
        const newTasksDelete = state.tasks.filter(task => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(newTasksDelete));
        return {
          ...state,
          tasks: newTasksDelete
        };
      case UPDATE_TASK_PRIORITY:
        const newTasksUpdate = state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        );
        localStorage.setItem('tasks', JSON.stringify(newTasksUpdate));
        return {
          ...state,
          tasks: newTasksUpdate
        };
      default:
        return state;
    }
  }