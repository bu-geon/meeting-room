export interface IUserInfo {
  displayName: string
  email: string
  profile: string
  uid: string
}

export interface IUserState {
  user: IUserInfo | null
}
