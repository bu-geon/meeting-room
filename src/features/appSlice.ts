import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  userId: string | null
  userName: string | null
}

const initialState: IAppState = {
  userId: null,
  userName: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    },
  },
})

export const { setUserId } = appSlice.actions

export const selectUserId = (state: { app: IAppState }) => state.app.userId
export const selectUserName = (state: { app: IAppState }) => state.app.userName

export default appSlice.reducer
