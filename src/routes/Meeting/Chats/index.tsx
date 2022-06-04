import { selectRoomId } from 'features/roomSlice'
import { selectUser } from 'features/userSlice'
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { sendMessage } from 'services/firebase'
import styles from './chats.module.scss'

const Chats = () => {
  const [input, setInput] = useState('')
  const roomId = useSelector(selectRoomId)
  const user = useSelector(selectUser)

  const handleSendMessage = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    sendMessage(roomId!, input, user!)
    setInput('')
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  useEffect(() => {}, [])

  return (
    <div className={styles.chats}>
      <h4>CHATS</h4>
      <div className={styles.chatsLog}>내용</div>
      <form onSubmit={handleSendMessage}>
        <input type='text' value={input} placeholder='Type Something' onChange={handleChangeInput} />
        <button type='submit' onClick={handleSendMessage}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chats
