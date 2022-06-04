import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { IUserInfo } from 'types/user'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const addRoom = async (roomName: string) => {
  await addDoc(collection(db, 'rooms'), {
    name: roomName,
  })
}

export const sendMessage = async (roomId: string, message: string, user: IUserInfo) => {
  await addDoc(collection(db, 'rooms', roomId, 'messages'), {
    timestamp: serverTimestamp(),
    message,
    user,
  })
}

export default db
