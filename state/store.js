import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './slice/authUserSlice'

export const store = configureStore({
  reducer: {
    authUser : authUserReducer
  },
})