import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './routes.module.scss'
import { login, logout, selectUser } from 'features/userSlice'

import GNB from './_shared/GNB'
import Meeting from './Meeting'
import Login from './Login'
import { useEffect } from 'react'
import { auth } from 'services/firebase'

document.cookie = 'safeCookie1=foo; SameSite=Lax'
document.cookie = 'safeCookie2=foo'
document.cookie = 'crossCookie=bar; SameSite=None; Secure'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('current user:', authUser)
      if (authUser) {
        // login
        dispatch(
          login({
            uid: authUser.uid,
            profile: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        // logout
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
              <Route path='meeting' element={<Meeting />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  )
}

export default App
