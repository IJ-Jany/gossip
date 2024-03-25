
import { configureStore } from '@reduxjs/toolkit'
import userslice from './slices/userslice'
import activeUserSlice from './slices/activeUserSlice'
export const store = configureStore({
  reducer:{
    loginuserdata:userslice,
    activeuserdata:activeUserSlice,
  },
})