import styles from './meeting.module.scss'

import Chats from './Chats'
import Todos from './Todos'

const Meeting = () => {
  return (
    <div className={styles.meeting}>
      <div className={styles.content}>Meeting Room</div>
      <div className={styles.sideBar}>
        <Todos />
        <Chats />
      </div>
    </div>
  )
}

export default Meeting
