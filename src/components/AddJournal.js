import React, { useState } from 'react'

const generateId = (array) => {
	if (array.length === 0 || array[array.length-1].tempId === undefined) {
		return 0
	} else {
		return array[array.length-1].tempId + 1
	}
}

const AddJournal = ({ addJournal }) => {
	const [todos, setTodos] = useState([])
	const [reflection, setReflection] = useState('')
	const [bookSummaries, setBookSummaries] = useState([])
	const [todayWords, setTodayWords] = useState([])

	const addTask = () => {
		setTodos(todos.concat({
			tempId: generateId(todos),
			done: false,
			task: ''
		}))
	}

	const deleteTask = tempId => {
		setTodos(todos.filter(todo => todo.tempId !== tempId))
	}

	const handleTodoChange = (tempId, property) => (event) => {
		const todo = todos.find(n => n.tempId === tempId)
		const updatedTodo = property === 'done' ?
			{ ...todo, done: event.target.checked }
			: { ...todo, task: event.target.value }
		setTodos(todos.map(todo => todo.tempId !== tempId ? todo : updatedTodo))
	}

	const handleReflectionChange = event => {
		setReflection(event.target.value)
	}
	return (
		<form onSubmit={addJournal}>
			<h2>Journal for Today</h2>

			<div>
				<h3>Todos</h3>
				<button onClick={addTask}>add a task</button> <br/>
				{todos.map(todo => (
					<div key={todo.tempId}>
						<input type="checkbox" checked={todo.done} onChange={handleTodoChange(todo.tempId, 'done')}/>
						<input value={todo.task} onChange={handleTodoChange(todo.tempId, 'task')}/>
						<button onClick={() => deleteTask(todo.tempId)}>delete</button>
					</div>
				))}

			</div>


			<div>
				<h3>How is your day?</h3>
				<textarea value={reflection} onChange={handleReflectionChange}></textarea>
			</div>
		</form>
	)
}

export default AddJournal