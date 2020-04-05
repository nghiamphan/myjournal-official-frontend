import React, { useState } from 'react'

const AddJournal = ({ addJournal }) => {
	const [todo, setTodo] = useState({ done: false, task: '' })
	const [todos, setTodos] = useState([])
	const [reflection, setReflection] = useState('')
	const [bookSummaries, setBookSummaries] = useState([])
	const [todayWords, setTodayWords] = useState([])

	console.log('Todo: ', todo)

	const handleTodoChange = (property) => (event) => {
		if (property === 'done') {
			setTodo({ ...todo, done: event.target.checked })
		} else {
			setTodo({ ...todo, task: event.target.value })
		}
	}

	const handleReflectionChange = event => {
		setReflection(event.target.value)
	}
	return (
		<form onSubmit={addJournal}>
			<h2>Journal for Today</h2>

			<div>
				<h3>Todos</h3>
				<input type="checkbox" checked={todo.done} onChange={handleTodoChange('done')}/>
				<input value={todo.task} onChange={handleTodoChange('task')}/>
			</div>


			<div>
				<h3>How is your day?</h3>
				<textarea value={reflection} onChange={handleReflectionChange}></textarea>
			</div>
		</form>
	)
}

export default AddJournal