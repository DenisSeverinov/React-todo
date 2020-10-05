import React from 'react'
import './Box.scss'

const Wrapper = props => {
	return (
		<div className='Box'>
			{props.input}
			{props.list}
			{props.filter}
		</div>
	)
}

export default Wrapper