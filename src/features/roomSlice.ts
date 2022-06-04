import { createSlice } from '@reduxjs/toolkit'

interface IChannelState {
  roomId: string | null
  roomName: string | null
}

const initialState: IChannelState = {
  roomId: null,
  roomName: null,
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setCurrentRoom: (state, action) => {
      state.roomId = action.payload.roomId
      state.roomName = action.payload.roomName
    },
  },
})

export const { setCurrentRoom } = roomSlice.actions

export const selectRoomId = (state: { room: IChannelState }) => state.room.roomId
export const selectRoomName = (state: { room: IChannelState }) => {
  console.log('1111', state)
  return state.room.roomName
}

export default roomSlice.reducer
