import styles from './meeting.module.scss'

import Chats from './Chats'
import Todos from './Todos'
import { Alarm, Setting } from 'assets'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import { IUserInfo } from 'types/user'

const Meeting = () => {
  const user: IUserInfo = useSelector(selectUser)
  console.log('Meeting', user)

  return (
    <div className={styles.meeting}>
      <div className={styles.content}>Meeting Room</div>
      <div className={styles.sideBar}>
        <div className={styles.personalMenu}>
          <Setting />
          <Alarm />
          <div className={styles.profile}>
            <img src={user.profile} alt='profile' />
            <h3>{user!.displayName}</h3>
            <p>#thisismyid</p>
          </div>
        </div>
        <Todos />
        <Chats />
      </div>
    </div>
  )
}

export default Meeting
