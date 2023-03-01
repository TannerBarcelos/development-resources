import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import feedReducer from '../features/Feed/FeedSlice'

export const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
