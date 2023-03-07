/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'
// eslint-disable-next-line import/no-named-as-default
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodoList: initialTodosList}

  deleteTodo = id => {
    const {TodoList} = this.state
    const filteredTodoList = TodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({TodoList: filteredTodoList})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="bg-container">
        <div className="todos-box">
          <h1 className="heading">Simple Todos</h1>
          <ul className="each-todo">
            {TodoList.map(eachTodo => 
              <TodoItem Todo={eachTodo} key={eachTodo.id} deleteTodo={this.deleteTodo}/>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
