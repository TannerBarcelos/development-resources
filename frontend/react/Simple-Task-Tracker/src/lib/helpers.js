// Toggle Reminder
export const toggleReminder = (id, tasks, setTasks) => {
  localStorage.setItem(
    'tasksArray',
    JSON.stringify(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    ),
  );

  setTasks(JSON.parse(localStorage.getItem('tasksArray')));
};

// Delete Task
export const deleteTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem('tasksArray', JSON.stringify(updatedTasks));
  setTasks(updatedTasks);
};

// Edit Task
export const editTask = (task, setCurrentEditTask, setIsInEditingState) => {
  // console.log(task);
  // setCurrentEditTask(task);
  // setIsInEditingState(true);
};

// Add Task
export const addTask = (task, setTasks) => {
  const id = new Date().getTime().toString();
  const newTask = { id, ...task };
  const oldTasks = JSON.parse(localStorage.getItem('tasksArray')) || [];
  oldTasks.push(newTask);
  localStorage.setItem('tasksArray', JSON.stringify(oldTasks));
  setTasks(oldTasks);
};

export const clearAllTasks = (setTasks) => {
  setTasks([]);
  localStorage.removeItem('tasksArray');
};

export const setDate = (task) => {
  let tempString = '';
  let timeString = '';
  let month = '';
  if (task.day) {
    tempString = JSON.stringify(task.day);
    switch (parseInt(tempString[6] + tempString[7])) {
      case 1:
        month = 'January';
        break;
      case 2:
        month = 'February';
        break;
      case 3:
        month = 'March';
        break;
      case 4:
        month = 'April';
        break;
      case 5:
        month = 'May';
        break;
      case 6:
        month = 'June';
        break;
      case 7:
        month = 'July';
        break;
      case 8:
        month = 'August';
        break;
      case 9:
        month = 'September';
        break;
      case 10:
        month = 'October';
        break;
      case 11:
        month = 'November';
        break;
      case 12:
        month = 'December';
        break;
      default:
    }

    let suffix = '';

    switch (parseInt(tempString[10])) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        //the case when it is a 0,4,5,6,7,8, or 9
        suffix = 'th';
        break;
    }

    // this double checks to see if the date is in the 10's place since all end in th
    switch (parseInt(tempString[9])) {
      case 1:
        suffix = 'th';
        break;
      default:
        break;
    }

    let amOrPm = '';
    let hour = parseInt(tempString[12] + tempString[13]);
    let minute = tempString[15] + tempString[16];
    let year = tempString[1] + tempString[2] + tempString[3] + tempString[4];
    if (hour / 12 > 1) {
      hour = hour % 12; //will mod 12
      amOrPm = 'PM';
    } else {
      amOrPm = 'AM';
    }

    timeString =
      month +
      ' ' +
      tempString[9] +
      tempString[10] +
      suffix +
      ', ' +
      year +
      ', @' +
      hour +
      ':' +
      minute +
      amOrPm;
  } else {
    timeString = 'No Time Selected';
  }
  return timeString;
};
