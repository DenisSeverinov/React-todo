import React from 'react'
import './TodoFilter.scss'

const TodoFilter = props => {
	return (
		<div className='TodoFilter'>
			<p className='TodoFilter__text'>{props.sumOfTask} Task</p>
			<div className='filter'>
				<button className='filter__btn' href='#'>All</button>
				<button className='filter__btn' href='#'>Active</button>
				<button className='filter__btn' href='#'>Completed</button>
			</div>
			<p className='TodoFilter__text'>Clear completed</p>
		</div>
	)
}

export default TodoFilter