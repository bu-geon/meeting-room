import { GoogleIcon } from 'assets'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from 'services/firebase'

import styles from './login.module.scss'

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <div className={styles.login}>
      <p className={styles.summary}>Login Now</p>
      <button className={styles.signIn} type='button' onClick={signIn}>
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
