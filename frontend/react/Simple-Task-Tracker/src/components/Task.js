import React, { useState } from 'react';
import { RiEditBoxLine, RiFlag2Fill } from 'react-icons/ri';

import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { setDate } from '../lib/helpers';

const Task = ({
  task,
  onDelete,
  onEdit,
  tasks,
  setTasks,
  editTaskContents,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentEditTask, setCurrentEditTask] = useState({
    id: task.id,
    text: task.text,
    day: task.day,
    reminder: task.reminder,
  });

  const editModalProcessor = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleEditTask = (e) => {
    setCurrentEditTask((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitEditChanges = (e) => {
    e.preventDefault();
    editTaskContents(currentEditTask);
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className={`task ${task?.reminder ? 'reminder-border' : ''}`}>
      <h3>
        {task.text}
        <div>
          <RiFlag2Fill className='flag-icn' />
          <RiEditBoxLine
            className='icon-div'
            onClick={() => {
              setIsOpen(true);
              onEdit(task, setCurrentEditTask);
            }}
          />
          <AiOutlineCloseCircle
            className='exit-modal-icon-sm'
            style={{ color: 'red', cursor: 'pointer', marginLeft: '12px' }}
            onClick={() => {
              setIsOpen(false);
              onDelete(task.id, tasks, setTasks);
            }}
          />
        </div>
      </h3>
      <p>{setDate(task)}</p>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => editModalProcessor()}
        className='modal-styles'
        ariaHideApp={false}
      >
        <h2>Edit Task</h2>
        <AiOutlineCloseCircle
          onClick={() => setIsOpen(false)}
          className='exit-modal-icon'
        />
        <form className='add-form' onSubmit={(e) => submitEditChanges(e)}>
          <div className='form-control'>
            <label>Edit Task</label>
            <input
              type='text'
              name='text'
              placeholder='Edit Task'
              value={currentEditTask.text}
              onChange={(e) => handleEditTask(e)}
            />
          </div>
          <div className='form-control'>
            <label>Date & Time</label>
            <input
              type='datetime-local'
              name='day'
              placeholder='Add Day & Time'
              value={currentEditTask.day}
              onChange={(e) => handleEditTask(e)}
            />
          </div>
          {currentEditTask.reminder ? (
            <div
              type='submit'
              className='btn btn-block rem-btn'
              onClick={(e) =>
                setCurrentEditTask((prevState) => {
                  return {
                    ...prevState,
                    reminder: !prevState.reminder,
                  };
                })
              }
            >
              Remove Reminder
            </div>
          ) : (
            <div
              type='submit'
              className='btn btn-block rem-btn'
              onClick={(e) =>
                setCurrentEditTask((prevState) => {
                  return {
                    ...prevState,
                    reminder: !prevState.reminder,
                  };
                })
              }
            >
              Set Reminder
            </div>
          )}
          <button
            className='btn btn-block'
            onSubmit={(e) => submitEditChanges(e)}
          >
            Confirm
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Task;
