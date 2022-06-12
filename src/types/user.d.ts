import { Timestamp } from 'firebase/firestore'

export interface IUserInfo {
  displayName: string
  email: string
  profile: string
  uid: string
}

export interface IUserState {
  user: IUserInfo | null
}

export interface IMessage {
  id: string
  content: string
  user: string
  timestamp: Timestamp
}
