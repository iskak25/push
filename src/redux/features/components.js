import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stateActiv: false,
}

export const activingSlice = createSlice({
  name: 'activ',
  initialState,
  reducers: {
    isActiv: (state) => {
      state.stateActiv = true
    },
  },
})

export const { isActiv } = activingSlice.actions

export default activingSlice.reducer
