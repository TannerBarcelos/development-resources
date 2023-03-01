import { configureStore } from '@reduxjs/toolkit';

// Enahncers - Enhance the way dispatch etc. works
import { sayHi } from '../addons/enhancers';

// Middleware - Runs on every set of dispatches. Can have side effects, see teh current action, etc. Think of it like Express MW
import { logger, timestampifyNewTodos } from '../addons/middleware';

// Reducers / Slices
import todoReducer from '../features/todos/todoSlice';
import filterReducer from '../features/filters/filterSlice';

// Creates store - automatically runs combineReducer() for us and instead let's us just define reducer list mapping
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
  middleware: [logger, timestampifyNewTodos],
  enhancers: [sayHi],
});

// Example of how to manually dispatch an action object with type string and paylod
// in RTK this changes as RTK creates the action creators for us with the right types and we just worry about passing in a payload
// store.dispatch({
//   type: 'todos/todoAdded',
//   payload: { text: 'test with old dispatch', completed: false, flag: 'red' },
// });
