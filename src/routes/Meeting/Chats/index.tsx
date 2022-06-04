import { selectRoomId } from 'features/roomSlice'
import { selectUser } from 'features/userSlice'
import { collection, onSnapshot } from 'firebase/firestore'
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import db, { sendMessage } from 'services/firebase'
import styles from './chats.module.scss'

const Chats = () => {
  const [input, setInput] = useState('')
  const roomId = useSelector(selectRoomId)
  const user = useSelector(selectUser)
  const [messages, setMessages] = useState<any>([])

  const handleSendMessage = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (input.trim().length > 0) {
      sendMessage(roomId!, input, user!)
    }
    setInput('')
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  useEffect(() => {
    onSnapshot(collection(db, 'rooms', roomId!, 'messages'), (snapshot) => {
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().message,
        user: doc.data().user,
        timestamp: doc.data().timestamp,
      }))
      const sortedMessages = result.sort((a, b) => a.timestamp - b.timestamp)

      setMessages(sortedMessages)
    })
  }, [roomId])

  return (
    <div className={styles.chats}>
      <h4>CHATS</h4>
      <div className={styles.chatsLog}>
        <ul>
          {messages.map((el: any) => (
            <li key={el.id}>{el.content}</li>
          ))}
        </ul>
      </div>
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
