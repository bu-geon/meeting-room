import { Route, Routes } from 'react-router-dom'
import Meeting from './Meeting'
import styles from './routes.module.scss'

import GNB from './_shared/GNB'

const App = () => {
  return (
    <div className={styles.app}>
      <GNB />
      <main>
        <Routes>
          <Route path='meeting' element={<Meeting />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
