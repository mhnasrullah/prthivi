import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './slice/authUserSlice'
import landingPageReducer from './slice/landingSlice'

export const store = configureStore({
  reducer: {
    authUser : authUserReducer,
    landingPage : landingPageReducer
  },
})