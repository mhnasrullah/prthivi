import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './slice/authUserSlice'
import adminerPageReducer from './slice/adminerSlice'
import landingPageReducer from './slice/landingSlice'
import landingApiReducer,{ landingApi } from './slice/landingApiSlice'

export const store = configureStore({
  reducer: {
    [landingApi.reducerPath]: landingApiReducer,
    authUser : authUserReducer,
    landingPage : landingPageReducer,
    adminerPage : adminerPageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(landingApi.middleware)
})