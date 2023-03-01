import { useState, useEffect } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTaskForm from './components/AddTask';
import Button from './components/interactive/Button';

import { FaTrash } from 'react-icons/fa';

import {
  toggleReminder,
  deleteTask,
  addTask,
  editTask,
  clearAllTasks,
} from './lib/helpers.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const tasksList = JSON.parse(localStorage.getItem('tasksArray')) || [];
    setTasks(tasksList);
  }, []);

  const editTaskContents = (newTaskContents) => {
    const editedNewTasks = tasks.map((task) => {
      if (task.id === newTaskContents.id) {
        return newTaskContents;
      }
      return task;
    });
    setTasks(editedNewTasks);
    localStorage.setItem('tasksArray', JSON.stringify(editedNewTasks));
  };

  return (
    <>
      <div className='main-container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTaskForm onAdd={addTask} setTasks={setTasks} />}
        {tasks.length > 0 && (
          <FaTrash
            className='empty-tasks-btn'
            color={'black'}
            text={'Clear Tasks'}
            onClick={() => clearAllTasks(setTasks)}
          />
        )}
      </div>
      <div className='task-container'>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleReminder}
                onEdit={editTask}
                setTasks={setTasks}
                tasks={tasks}
                editTaskContents={editTaskContents}
              />
            );
          })
        ) : (
          <h2>Clean Slate</h2>
        )}
      </div>
    </>
  );
};

export default App;
