import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from 'services/firebase'

import styles from './login.module.scss'

const Login = () => {
  const signIn = () => {
    // signInWithPopup(auth, provide)
    signInWithPopup(auth, provider)
  }

  return (
    <div className={styles.login}>
      <h1>I am login Page</h1>
      <button className={styles.signIn} type='button' onClick={signIn}>
        Sign In
      </button>
    </div>
  )
}

export default Login
