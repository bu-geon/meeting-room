import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from 'features/roomSlice'
import { selectUser } from 'features/userSlice'
import { collection, onSnapshot } from 'firebase/firestore'
import db, { sendMessage } from 'services/firebase'
import cx from 'classnames'

import styles from './chats.module.scss'

import { Send } from 'assets'
import { IMessage } from 'types/user'

const Chats = () => {
  const [input, setInput] = useState('')
  const roomId = useSelector(selectRoomId)
  const user = useSelector(selectUser)
  const [messages, setMessages] = useState<IMessage[]>([])
  const messagesBottomRef = useRef<HTMLUListElement>(null)

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

  const scrollToBottom = () => {
    if (messagesBottomRef.current) {
      messagesBottomRef.current.scrollTop = messagesBottomRef.current.scrollHeight
    }
  }

  useEffect(() => {
    onSnapshot(collection(db, 'rooms', roomId!, 'messages'), (snapshot) => {
      const result = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          content: doc.data().message,
          user: doc.data().user,
          timestamp: doc.data().timestamp,
        }))
        .sort((a, b) => a.timestamp - b.timestamp)

      setMessages(result)
      scrollToBottom()
    })
  }, [roomId])

  return (
    <div className={styles.chats}>
      <h4>CHATS</h4>
      <ul className={styles.chatsLog} ref={messagesBottomRef}>
        {messages.map((el: IMessage) => (
          <li className={cx(styles.message, { [styles.mine]: el.user.uid === user?.uid })} key={el.id}>
            <img src={el.user.profile} alt='user profile' />
            <span className={styles.text}>{el.content}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input type='text' value={input} placeholder='Type Something' onChange={handleChangeInput} />
        <button className={styles.sendButton} type='submit' onClick={handleSendMessage}>
          <Send className={styles.send} />
        </button>
      </form>
    </div>
  )
}

export default Chats
