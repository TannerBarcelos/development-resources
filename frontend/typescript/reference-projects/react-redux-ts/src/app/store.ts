import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoListReducer from '../features/todolist/todoListSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
  },
})

// Types to help us with TS in Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
