import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: (state) => {
      state.counter += 1
    },
    minus: (state) => {
      state.counter -= 1
    },
    result: (state, action) => {
      state.counter += action.payload
    },
  },
})


export const { plus, minus, result } = countSlice.actions

export default countSlice.reducer