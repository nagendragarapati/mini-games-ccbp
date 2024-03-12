import {createSlice} from '@reduxjs/toolkit'

const memorySlice = createSlice({
  name: 'memorymatrix',
  initialState: {
    gameLevel: 1,
  },
  reducers: {
    setGameLevel(state, action) {
      return {...state, gameLevel: action.payload}
    },
  },
})

export const memoryMatrixActions = memorySlice.actions

export default memorySlice
