import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

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
