import { Plus } from 'assets'
import styles from './todos.module.scss'

const Todos = () => {
  return (
    <div className={styles.todos}>
      <h4>TODOS</h4>
      <ul className={styles.todosList}>
        <li>Discuss Brand Story</li>
        <li>Explain Workflow</li>
        <li>Get a job</li>
        <li>Prepare job interview</li>
        <li>Earn lots of Money</li>
        <li>Prensent Porsche to Miriya</li>
        <li>this sentense tests overflow for list okay~ still going</li>
      </ul>
      <p>
        <Plus />
        Add To do
      </p>
    </div>
  )
}

export default Todos
