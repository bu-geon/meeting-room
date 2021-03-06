import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from 'services/firebase'
import { login, logout, selectUser } from 'features/userSlice'

import styles from './routes.module.scss'

import GNB from './_shared/GNB'
import Meeting from './Meeting'
import Login from './Login'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            profile: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className={styles.app}>
      {!user && <Login />}
      {user && (
        <>
          <GNB />
          <main>
            <Routes>
              <Route path='/' element={<Meeting />} />
              <Route path='*' element={<Meeting />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  )
}

export default App
