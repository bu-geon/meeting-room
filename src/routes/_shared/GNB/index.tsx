import { Dropdown, Plus } from 'assets'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import db, { addRoom, getRooms } from 'services/firebase'
import styles from './gnb.module.scss'
import Room from './Room'

interface IRoom {
  name: string
}

const GNB = () => {
  const [rooms, setRooms] = useState([])

  const handleAddRoom = () => {
    const roomName = prompt('방 이름을 입력해주세요.')

    if (roomName!.trim().length > 0) {
      addRoom(roomName!)
    }
  }

  useEffect(() => {
    getRooms(setRooms)
  }, [])

  return (
    <div className={styles.sideBar}>
      Side Bar
      <div className={styles.roomsList}>
        <div className={styles.dropdown}>
          <Dropdown width={30} height={30} />
          ROOMS
          <Plus width={30} height={30} onClick={handleAddRoom} />
        </div>
        {rooms.map((room: IRoom) => (
          <Room key={room.name} name={room.name} />
        ))}
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
