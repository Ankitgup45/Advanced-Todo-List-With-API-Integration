import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK_PRIORITY
  } from '../types';
  
  export const addTask = (task) => {
    return {
      type: ADD_TASK,
      payload: {
        id: Date.now(),
        text: task.text,
        priority: task.priority || 'Medium'
      }
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      payload: id
    };
  };
  
  export const updateTaskPriority = (id, priority) => {
    return {
      type: UPDATE_TASK_PRIORITY,
      payload: { id, priority }
    };
  };