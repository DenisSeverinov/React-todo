import React from 'react'
import './TodoList.scss'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = props => {
    return (
        <ul className='TodoList'>
            {props.todos.map(todo => {
                return <TodoItem
                            key={todo.id} 
                            todo={todo} 
                            onChange={props.onChange} 
                            onClick={props.onClick}
                            onDoubleClick={props.onDoubleClick}
                        />
            })}
        </ul>
    )
}

export default TodoList