import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
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
	const [todayWords, setTodayWords] = useState([])

	const { register, control, handleSubmit, errors } = useForm()

	const todosInputArray = useFieldArray({
		control,
		name: 'todos'
	})

	const bookSummariesInputArray = useFieldArray({
		control,
		name: 'bookSummaries'
	})

	const dispatch = useDispatch()

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

	const addJournal = data => {
		console.log('data', data)
		//event.preventDefault()
		const journalObject = {
			date: data.date,
			todos: data.todos ? data.todos.map((todo, index) => ({ ...todo, id: index })) : [],
			reflection: data.reflection,
			book_summaries: data.bookSummaries ? data.bookSummaries.map((summary, index) => ({ ...summary, id: index })) : [],
			words_of_today: todayWords
		}
		dispatch(createJournal(journalObject))
	}
	return (
		<form onSubmit={handleSubmit(addJournal)}>
			<h2>Journal for Today</h2>

			<div>
				<h3>Date
					<input
						type="date"
						name="date"
						ref={register({ required: true })}
					/>
				</h3>
				{errors.date && <span>This field is required</span>}
			</div>

			<div>
				<h3>Todos</h3>
				<button
					onClick={event => {
						event.preventDefault()
						todosInputArray.append({})
					}}
				>
					add a task
				</button>
				<br/>

				{todosInputArray.fields.map((item, index) => (
					<div key={item.id}>
						<input
							type="checkbox"
							name={`todos[${index}].done`}
							ref={register()}
						/>
						<input
							name={`todos[${index}].task`}
							ref={register()}
						/>
						<button
							onClick={() => todosInputArray.remove(index)}
						>
							delete
						</button>
					</div>
				))}

			</div>


			<div>
				<h3>How is your day?</h3>
				<div>
					<textarea
						name="reflection"
						ref={register({ required: true })}
					/>
				</div>
				{errors.reflection && <span>This field is required</span>}
			</div>

			<div>
				<h3>Book Summaries</h3>
				<button
					onClick={event => {
						event.preventDefault()
						bookSummariesInputArray.append({})
					}}
				>
					add a summary
				</button> <br/>

				{bookSummariesInputArray.fields.map((summary, index) => (
					<div key={summary.id} style={padding}>
						<div>
							Title:
							<input
								name={`bookSummaries[${index}].title`}
								ref={register()}
							/>
							Chapter:
							<input
								name={`bookSummaries[${index}].chapter`}
								ref={register()}
							/>
						</div>
						<textarea
							placeholder="chapter summary and your thoughts..."
							name={`bookSummaries[${index}].content`}
							ref={register()}
						/>
						<br/>
						<button
							onClick={() => bookSummariesInputArray.remove(index)}
						>
							delete
						</button>
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