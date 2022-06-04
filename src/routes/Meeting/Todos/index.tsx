import { Plus } from 'assets'
import { ChangeEvent } from 'react'
import styles from './todos.module.scss'

const DUMMY_LIST = [
  {
    id: '#todo1',
    title: 'Discuss Brand Story',
    done: false,
  },
  {
    id: '#todo2',
    title: 'xplain Workflow',
    done: false,
  },
  {
    id: '#todo3',
    title: 'Get a job',
    done: false,
  },
  {
    id: '#todo4',
    title: 'Earn lots of Money',
    done: false,
  },
  {
    id: '#todo5',
    title: 'Prensent Porsche to Miriya',
    done: false,
  },
  {
    id: '#todo6',
    title: 'this sentense tests overflow for list okay~ still going',
    done: false,
  },
]

const Todos = () => {
  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.checked = !e.currentTarget.checked
  }

  return (
    <div className={styles.todos}>
      <h4>TODOS</h4>
      <ul className={styles.todosList}>
        <form>
          {DUMMY_LIST.map((el, i) => (
            <li className={styles.todo} key={el.id}>
              <input type='checkbox' id={`${i}`} name='todo' value={el.title} onChange={handleChangeCheckBox} />
              <label htmlFor={el.title}> {el.title}</label>
            </li>
          ))}
        </form>
      </ul>
      <p className={styles.addTodo}>
        <Plus />
        Add To do
      </p>
    </div>
  )
}

export default Todos
