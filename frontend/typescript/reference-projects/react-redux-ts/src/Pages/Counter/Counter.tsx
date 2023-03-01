import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementBy,
  reset,
} from '../../features/counter/counterSlice'
import './CounterStyles.css'
export const Counter = () => {
  // Note the custom hooks - because using TS we create these to make typing easier
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const onHandleClick = (type: string): void => {
    switch (type) {
      case 'increment': {
        dispatch(increment())
        break
      }
      case 'decrement': {
        dispatch(decrement())
        break
      }
      case 'incrementBy': {
        dispatch(incrementBy(3))
        break
      }
      default: {
        break
      }
    }
  }
  return (
    <div>
      <h1>Counter Example</h1>
      <h3>
        Current Count - <span>{count}</span>
      </h3>
      <button onClick={() => onHandleClick('increment')}>Increment</button>
      <button onClick={() => onHandleClick('decrement')}>Decrement</button>
      <button onClick={() => onHandleClick('incrementBy')}>
        Increment By 3
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
