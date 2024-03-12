import {configureStore} from '@reduxjs/toolkit'
import rpsSlice from './rpsslice'
import flipSlice from './flipSlice'
import memorySlice from './memorySlice'

const store = configureStore({
  reducer: {
    rps: rpsSlice.reducer,
    flipgame: flipSlice.reducer,
    memorymatrix: memorySlice.reducer,
  },
})

export default store
