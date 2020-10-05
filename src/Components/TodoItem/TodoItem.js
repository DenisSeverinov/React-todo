import React from 'react'
import './TodoItem.scss'

const TodoItem = props => {
	
	return (
		<li className='TodoItem'>
			<input className='TodoItem__checkbox' type='checkbox' onChange={() => props.onChange(props.todo.id)} />
			<span 
				className='TodoItem__text'
				onDoubleClick={() => props.onDoubleClick(props.todo.id)}
			>
				{props.todo.title}
			</span>
			<button className='TodoItem__button' onClick={() => props.onClick(props.todo.id)}>
				Delete
			</button>
		</li>
	)
}

export default TodoItem