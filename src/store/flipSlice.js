import {createSlice} from '@reduxjs/toolkit'

const flipSlice = createSlice({
  name: 'flipgame',
  initialState: {
    gameStatus: '',
    noOfFlips: 0,
  },

  reducers: {
    setGameStatus(state, action) {
      return {...state, gameStatus: action.payload}
    },

    setNoOfFlips(state, action) {
      return {...state, noOfFlips: action.payload}
    },
  },
})

export const flipActions = flipSlice.actions

export default flipSlice
