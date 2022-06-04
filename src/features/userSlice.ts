import { createSlice } from '@reduxjs/toolkit'
import { IUserState } from 'types/user'

const initialState: IUserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: () => initialState,
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: any) => state.user.user

export default userSlice.reducer
