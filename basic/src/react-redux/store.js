import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/CounterSlice'
import peopleSlice from './slice/peopleSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    people: peopleSlice
  },
})