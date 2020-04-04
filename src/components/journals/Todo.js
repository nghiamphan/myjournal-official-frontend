import React from 'react'

const Todo = ({ todo }) => (
	<li>
		<input type="checkbox" id="{todo.id}"></input>
		<label htmlFor="{todo.id}">{todo.task}</label>
	</li>
)

export default Todo