import { NavLink } from 'react-router-dom'
import styles from './room.module.scss'

const Room = () => {
  return (
    <NavLink to='meeting'>
      <h4 className={styles.roomTitle}>채널임다</h4>
    </NavLink>
  )
}

export default Room
