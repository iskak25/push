import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'
export const rootStore = configureStore({
  reducer: {
    auth: authReducer,
    // counter: counterReducer,
  },
})
