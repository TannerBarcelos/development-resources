import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoListState } from './interfaces'

export const fetchTodos = createAsyncThunk(
  '/todolist/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos',
      )
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const fetchTodo = createAsyncThunk(
  '/todolist/fetchTodos',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      )
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

const initialState: TodoListState = {
  todos: [],
  isLoading: false,
  isError: false,
  message: '',
}

export const todoListSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    // In our own app with our own API and Database, we'd make this a thunk and do an API call to server to actually remove from DB
    // ... because this is a mock API, deleting is not actually possible (request can be sent but it does not actually delete) so we mimick it by
    // overriding state
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { deleteTodo } = todoListSlice.actions

export default todoListSlice.reducer
