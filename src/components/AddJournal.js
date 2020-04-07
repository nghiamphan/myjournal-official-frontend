import React, { useState } from 'react'

const generateId = (array) => {
	if (array.length === 0 || array[array.length-1].tempId === undefined) {
		return 0
	} else {
		return array[array.length-1].tempId + 1
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

	const handleTodosChange = (tempId, property) => (event) => {
		const todo = todos.find(n => n.tempId === tempId)
		const updatedTodo = property === 'done' ?
			{ ...todo, done: event.target.checked }
			: { ...todo, task: event.target.value }
		setTodos(todos.map(todo => todo.tempId !== tempId ? todo : updatedTodo))
	}

	const handleReflectionChange = event => {
		setReflection(event.target.value)
	}

	const addSummary = () => {
		setBookSummaries(bookSummaries.concat({
			tempId: generateId(bookSummaries),
			title: '',
			chapter: '',
			content: ''
		}))
	}

	const deleteSummary = tempId => {
		setBookSummaries(bookSummaries.filter(summary => summary.tempId !== tempId))
	}

	const handleSummariesChange = (tempId, property) => (event) => {
		const summary = bookSummaries.find(n => n.tempId === tempId)
		const updatedSummary = { ...summary }
		updatedSummary[property] = event.target.value
		setBookSummaries(bookSummaries.map(
			summary => summary.tempId !== tempId ? summary : updatedSummary)
		)
	}

	const addWord = () => {
		setTodayWords(todayWords.concat({
			tempId: generateId(todayWords),
			word: '',
			definition: '',
		}))
	}

	const deleteWord = tempId => {
		setTodayWords(todayWords.filter(word => word.tempId !== tempId))
	}

	const handleWordsChange = (tempId, property) => (event) => {
		const word = todayWords.find(n => n.tempId === tempId)
		const updatedWord = { ...word }
		updatedWord[property] = event.target.value
		setTodayWords(todayWords.map(
			word => word.tempId !== tempId ? word : updatedWord)
		)
	}

	const addJournal = event => {
		event.preventDefault()
		const journal = {
			date: date,
			todos: todos,
			reflection: reflection,
			book_summaryies: bookSummaries,
			words_of_today: todayWords
		}
		console.log(journal)
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
					<div key={todo.tempId}>
						<input type="checkbox" checked={todo.done} onChange={handleTodosChange(todo.tempId, 'done')}/>
						<input value={todo.task} onChange={handleTodosChange(todo.tempId, 'task')}/>
						<button onClick={() => deleteTask(todo.tempId)}>delete</button>
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
					<div key={summary.tempId} style={padding}>
						<div>
							Title:
							<input
								value={summary.title}
								onChange={handleSummariesChange(summary.tempId, 'title')}/>
							Chapter:
							<input
								value={summary.chapter}
								onChange={handleSummariesChange(summary.tempId, 'chapter')}/>
						</div>
						<textarea
							placeholder="chapter summary and your thoughts..."
							value={summary.content}
							onChange={handleSummariesChange(summary.tempId, 'content')}/>
						<br/>
						<button onClick={() => deleteSummary(summary.tempId)}>delete</button>
					</div>
				))}
			</div>

			<div>
				<h3>Words of the day</h3>
				<button onClick={addWord}>add a word</button>
				{todayWords.map(word => (
					<div
						key={word.tempId}
						style={padding}>
						<input
							placeholder="Word"
							value={word.word}
							onChange={handleWordsChange(word.tempId, 'word')}/>
						<input
							placeholder="Definition..."
							value={word.definition}
							onChange={handleWordsChange(word.tempId, 'definition')}/>
						<button onClick={() => deleteWord(word.tempId)}>delete</button>
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