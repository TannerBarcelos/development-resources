import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define slice state structure
export interface CounterState {
  value: number
}

// Create initial state AND type it as our interface
const initialState: CounterState = {
  value: 0,
}

// Create slice (Reducers)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: () => {
      return initialState
    },
  },
})

export const { increment, decrement, incrementBy, reset } = counterSlice.actions
export default counterSlice.reducer
