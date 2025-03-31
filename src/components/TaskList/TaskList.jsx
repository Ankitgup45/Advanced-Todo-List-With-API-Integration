import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTaskPriority } from '../../redux/actions/taskActions';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'high-priority';
      case 'Medium':
        return 'medium-priority';
      case 'Low':
        return 'low-priority';
      default:
        return '';
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${getPriorityColor(task.priority)}`}>
              <span className="task-text">{task.text}</span>
              <div className="task-actions">
                <select
                  value={task.priority}
                  onChange={(e) => dispatch(updateTaskPriority(task.id, e.target.value))}
                  className="priority-select"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;