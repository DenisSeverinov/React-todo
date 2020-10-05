import React from 'react'
import './TodoForm.scss'

const TodoForm = props => {
	return (
		<div className='TodoForm'>
			<button 
				className='TodoForm__button'
				onClick={() => props.onClickAddTask()}
			>
				ADD
			</button>
			<input 
				className='TodoForm__text' 
				type='text'
				onKeyDown={(e) => props.onKeyDownAddTask(e)} 
				required/>
		</div>
	)
}


export default TodoForm

