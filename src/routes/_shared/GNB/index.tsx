import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db, { addRoom } from 'services/firebase'

import styles from './gnb.module.scss'
import { Dropdown, Plus } from 'assets'

import Room from './Room'

interface IRoomInfo {
  id: string
  room: DocumentData
}

const GNB = () => {
  const [rooms, setRooms] = useState<IRoomInfo[]>([])
  const [toggleRoomsDropdown, setToggleRoomsDropdown] = useState(true)

  const handleAddRoom = () => {
    // const roomName = prompt('방 이름을 입력해주세요.')

    if (roomName && roomName!.trim().length > 0) {
      addRoom(roomName!)
    }
  }

  const handleShowRoomsDropdown = () => {
    setToggleRoomsDropdown((prev) => !prev)
  }

  useEffect(() => {
    onSnapshot(collection(db, 'rooms'), (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          room: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <div className={styles.gnb}>
      Side Bar
      <button className={styles.dropdown} type='button' onClick={handleShowRoomsDropdown}>
        <Dropdown />
        ROOMS
        <Plus onClick={handleAddRoom} />
      </button>
      {toggleRoomsDropdown && rooms.map((doc: IRoomInfo) => <Room key={doc.id} id={doc.id} name={doc.room.name} />)}
      <div className={styles.dropdown}>
        <Dropdown />
        MEMBERS
        <Plus />
      </div>
    </div>
  )
}

export default GNB
