import { createSlice, nanoid } from '@reduxjs/toolkit';

const preloadedState = JSON.parse(localStorage.getItem('todos'));

const initialState = {
  todoList: preloadedState || [],
};

// Todo reducer
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  // Creates nested "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch) in old redux
  // so the todos slice , which is a reducer, now contains a switch case (abstracted into this new syntax)
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        const todo = action.payload;
        state.todoList = [todo, ...state.todoList];
      },
      // customize the action creator / payload for this reducer. prepare allows for manipulating the way payload / metadata
      // is consumed by some reducer. In this case, instead of passing an {} into the action when dispatching to represent payload,
      // this allows us to just pass three arguments into the action creator like a normal function and prepare will
      // transform that into a proper payload:{} object and then automatically get consumed by the corresponding reducer. If adding
      // prepare callback to a reducer, you must follow the syntax here which is reducerName: { reducer : {}, prepare: () => {} }
      prepare: (text, completed, flag) => {
        const preparedPayload = {
          id: nanoid(),
          text: text || '',
          completed: completed || false, // default to false if not passed true/false
          flag: flag || 'none',
        };
        return { payload: preparedPayload };
      },
    },
    todoToggled: (state, action) => {
      const { id } = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    todoDeleted: (state, action) => {
      const { id } = action.payload;
      state.todoList.filter((todo) => todo.id !== id);
    },
    todoCompletedAll: (state) => {
      state.todoList = state.todoList.map((todo) => (todo.completed = true));
    },
    todoClearedAll: (state, action) => {
      state.todoList = [];
    },
    todoFlagged: (state, action) => {
      const { id, flag } = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.flag = flag;
        }
        return todo;
      });
    },
  },
});

// Reducer function - makes component code cleaner and maintainable when state structure might shange, etc.
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
// You can write this inside useSelect() but this is more maintainable
export const todos = (state) => state.getState().todoList;

export const {
  todoAdded,
  todoToggled,
  todoDeleted,
  todoCompletedAll,
  todoClearedAll,
  todoFlagged,
} = todoSlice.actions;

export default todoSlice.reducer;
