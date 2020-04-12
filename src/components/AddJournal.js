import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createJournal } from '../reducers/journalsReducer'

const generateId = (array) => {
	if (array.length === 0 || array[array.length-1].id === undefined) {
		return 0
	} else {
		return array[array.length-1].id + 1
	}
}

const padding = {
	padding: 12
}
const AddJournal = () => {
	const [date, setDate] = useState('')
	const [todos, setTodos] = useState([])
	const [reflection, setReflection] = useState('')
	const [bookSummaries, setBookSummaries] = useState([])
	const [todayWords, setTodayWords] = useState([])

	const dispatch = useDispatch()

	const addTask = event => {
		event.preventDefault()
		setTodos(todos.concat({
			id: generateId(todos),
			done: false,
			task: ''
		}))
	}

	const deleteTask = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleTodosChange = (id, property) => (event) => {
		const todo = todos.find(n => n.id === id)
		const updatedTodo = property === 'done' ?
			{ ...todo, done: event.target.checked }
			: { ...todo, task: event.target.value }
		setTodos(todos.map(todo => todo.id !== id ? todo : updatedTodo))
	}

	const handleReflectionChange = event => {
		setReflection(event.target.value)
	}

	const addSummary = event => {
		event.preventDefault()
		setBookSummaries(bookSummaries.concat({
			id: generateId(bookSummaries),
			title: '',
			chapter: '',
			content: ''
		}))
	}

	const deleteSummary = id => {
		setBookSummaries(bookSummaries.filter(summary => summary.id !== id))
	}

	const handleSummariesChange = (id, property) => (event) => {
		const summary = bookSummaries.find(n => n.id === id)
		const updatedSummary = { ...summary }
		updatedSummary[property] = event.target.value
		setBookSummaries(bookSummaries.map(
			summary => summary.id !== id ? summary : updatedSummary)
		)
	}

	const addWord = event => {
		event.preventDefault()
		setTodayWords(todayWords.concat({
			id: generateId(todayWords),
			word: '',
			definition: '',
		}))
	}

	const deleteWord = id => {
		setTodayWords(todayWords.filter(word => word.id !== id))
	}

	const handleWordsChange = (id, property) => (event) => {
		const word = todayWords.find(n => n.id === id)
		const updatedWord = { ...word }
		updatedWord[property] = event.target.value
		setTodayWords(todayWords.map(
			word => word.id !== id ? word : updatedWord)
		)
	}

	const addJournal = event => {
		event.preventDefault()
		const journalObject = {
			date: date,
			todos: todos,
			reflection: reflection,
			book_summaries: bookSummaries,
			words_of_today: todayWords
		}
		dispatch(createJournal(journalObject))
	}
	return (
		<form onSubmit={addJournal}>
			<h2>Journal for Today</h2>

			<div>
				<h3>Date
					<input
						type="date"
						value={date}
						onChange={(event) => setDate(event.target.value)}/>
				</h3>
			</div>

			<div>
				<h3>Todos</h3>
				<button onClick={addTask}>add a task</button> <br/>
				{todos.map(todo => (
					<div key={todo.id}>
						<input type="checkbox" checked={todo.done} onChange={handleTodosChange(todo.id, 'done')}/>
						<input value={todo.task} onChange={handleTodosChange(todo.id, 'task')}/>
						<button onClick={() => deleteTask(todo.id)}>delete</button>
					</div>
				))}

			</div>


			<div>
				<h3>How is your day?</h3>
				<textarea value={reflection} onChange={handleReflectionChange}></textarea>
			</div>

			<div>
				<h3>Book Summaries</h3>
				<button onClick={addSummary}>add a summary</button> <br/>
				{bookSummaries.map(summary => (
					<div key={summary.id} style={padding}>
						<div>
							Title:
							<input
								value={summary.title}
								onChange={handleSummariesChange(summary.id, 'title')}/>
							Chapter:
							<input
								value={summary.chapter}
								onChange={handleSummariesChange(summary.id, 'chapter')}/>
						</div>
						<textarea
							placeholder="chapter summary and your thoughts..."
							value={summary.content}
							onChange={handleSummariesChange(summary.id, 'content')}/>
						<br/>
						<button onClick={() => deleteSummary(summary.id)}>delete</button>
					</div>
				))}
			</div>

			<div>
				<h3>Words of the day</h3>
				<button onClick={addWord}>add a word</button>
				{todayWords.map(word => (
					<div
						key={word.id}
						style={padding}>
						<input
							placeholder="Word"
							value={word.word}
							onChange={handleWordsChange(word.id, 'word')}/>
						<input
							placeholder="Definition..."
							value={word.definition}
							onChange={handleWordsChange(word.id, 'definition')}/>
						<button onClick={() => deleteWord(word.id)}>delete</button>
					</div>
				))}
			</div>

			<div style={padding}>
				<button type="submit">save</button>
			</div>

		</form>
	)
}

export default AddJournal