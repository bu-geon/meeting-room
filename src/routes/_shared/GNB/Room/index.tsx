import { setCurrentRoom } from 'features/roomSlice'
import { useDispatch } from 'react-redux'

import styles from './room.module.scss'

interface Props {
  id: string
  name: string
}

const Room = ({ id, name }: Props) => {
  const dispatch = useDispatch()

  const handleMoveRoom = () => {
    dispatch(
      setCurrentRoom({
        roomId: id,
        roomName: name,
      })
    )
  }

  return (
    // <NavLink to='meeting' onClick={handleMoveRoom}>

    <button type='button' onClick={handleMoveRoom}>
      <h4 className={styles.roomName}>{name}</h4>
    </button>
    // </NavLink>
  )
}

export default Room
