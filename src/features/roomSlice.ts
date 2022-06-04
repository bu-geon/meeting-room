import { createSlice } from '@reduxjs/toolkit'

interface IChannelState {
  roomId: string
  roomName: string
}

const initialState: IChannelState = {
  roomId: 'b1N8vpsqfmeHdsfAVgTx',
  roomName: 'Conference Room',
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
  return state.room.roomName
}

export default roomSlice.reducer
