/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line arrow-body-style
import './index.css'

const TodoItem = props => {
  const {Todo, deleteTodo} = props
  const {id, title} = Todo
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list">
      <p className="todo">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
