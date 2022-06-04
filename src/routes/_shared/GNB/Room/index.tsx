import { selectRoomName, setCurrentRoom } from 'features/roomSlice'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'

import styles from './room.module.scss'
import { Conversation } from 'assets'

interface Props {
  id: string
  name: string
}

const Room = ({ id, name }: Props) => {
  const dispatch = useDispatch()
  const currentRoom = useSelector(selectRoomName)

  const handleMoveRoom = () => {
    dispatch(
      setCurrentRoom({
        roomId: id,
        roomName: name,
      })
    )
  }

  return (
    <li>
      <button
        className={cx(styles.selectRoom, { [styles.active]: currentRoom === name })}
        type='button'
        onClick={handleMoveRoom}
      >
        <Conversation />
        {name}
      </button>
    </li>
  )
}

export default Room
