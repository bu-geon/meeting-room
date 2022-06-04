import { Notify, Setting } from 'assets'
import { auth } from 'services/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import { selectRoomName } from 'features/roomSlice'
import { IUserInfo } from 'types/user'

import styles from './meeting.module.scss'

import Chats from './Chats'
import Todos from './Todos'

const Meeting = () => {
  const user: IUserInfo | null = useSelector(selectUser)
  const currentRoom = useSelector(selectRoomName)

  const singOut = () => {
    auth.signOut()
  }

  return (
    <div className={styles.meeting}>
      <div className={styles.content}>{currentRoom}</div>
      <div className={styles.sideBar}>
        <div className={styles.personalMenu}>
          <Setting />
          <div className={styles.notify}>
            <Notify className={styles.alarm} />
          </div>
          <div className={styles.profile}>
            <img src={user!.profile} alt='profile' />
            <h3>{user!.displayName}</h3>
            <button type='button' onClick={singOut}>
              logout
            </button>
          </div>
        </div>
        <Todos />
        <Chats />
      </div>
    </div>
  )
}

export default Meeting
