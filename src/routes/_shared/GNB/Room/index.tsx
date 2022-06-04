import { NavLink } from 'react-router-dom'
import styles from './room.module.scss'

interface Props {
  name: string
}

const Room = ({ name }: Props) => {
  return (
    <NavLink to='meeting'>
      <h4 className={styles.roomTitle}>{name}</h4>
    </NavLink>
  )
}

export default Room
