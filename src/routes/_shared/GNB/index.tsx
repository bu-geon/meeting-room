import { Dropdown, Plus } from 'assets'
import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'
import Room from './Room'

const GNB = () => {
  return (
    <div className={styles.sideBar}>
      Side Bar
      <div className={styles.roomsList}>
        <div className={styles.dropdown}>
          <Dropdown width={30} height={30} />
          ROOMS
          <Plus width={30} height={30} />
        </div>
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
      <div className={styles.dropdown}>
        <Dropdown width={30} height={30} />
        MEMBERS
        <Plus className={styles.plus} width={30} height={30} />
      </div>
    </div>
  )
}

export default GNB
