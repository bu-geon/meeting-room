import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBbTo1kMghpEHK8999HihRCo_SdQEBcm3Y',
  authDomain: 'meeting-room-accba.firebaseapp.com',
  projectId: 'meeting-room-accba',
  storageBucket: 'meeting-room-accba.appspot.com',
  messagingSenderId: '1024571896879',
  appId: '1:1024571896879:web:646cfe8de58a7ccee842da',
  measurementId: 'G-BQ9YM90685',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const getRooms = async (setRooms: (param: any) => void) => {
  const roomsCol = collection(db, 'rooms')
  const roomSnapshot = await getDocs(roomsCol)
  const roomList = roomSnapshot.docs.map((doc) => doc.data())

  setRooms(roomList)
}

export const addRoom = async (roomName: string) => {
  try {
    const docRef = await addDoc(collection(db, 'rooms'), {
      name: roomName,
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export default db
