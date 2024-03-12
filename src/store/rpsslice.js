import {createSlice} from '@reduxjs/toolkit'

const rpsSlice = createSlice({
  name: 'rps',
  initialState: {
    score: 0,
    userChoice: '',
  },
  reducers: {
    setUserChoice(state, action) {
      return {...state, userChoice: action.payload}
    },

    setScore(state, action) {
      return {...state, score: action.payload}
    },
  },
})

export const rpsActions = rpsSlice.actions

export default rpsSlice
