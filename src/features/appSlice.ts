import { createSlice } from '@reduxjs/toolkit'

interface appState {
  userId: any
  userName: any
}

// Define the initial state using that type
const initialState: appState = {
  userId: null,
  userName: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId += action.payload
    },
  },
})

export const { setUserId } = appSlice.actions

export const selectUserId = (state: any) => state.app.userId
export const selectUserName = (state: any) => state.app.userName

export default appSlice.reducer
