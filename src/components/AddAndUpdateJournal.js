import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createJournal, updateJournal, setDisplayedJournalId } from '../reducers/journalsReducer'

const padding = {
	padding: 12
}
const AddAndUpdateJournal = () => {
	const [error, setError] = useState(null)

	const journals = useSelector(state => state.journalsRedux.journals)
	const journalToUpdateId = useSelector(state => state.journalsRedux.journalToUpdateId)
	const journalToUpdate = journalToUpdateId ? journals.find(journal => journal.id === journalToUpdateId) : null

	const { register, control, handleSubmit, errors } = useForm({
		defaultValues: journalToUpdate ? journalToUpdate : ''
	})

	const todosInputArray = useFieldArray({
		control,
		name: 'todos'
	})

	const bookSummariesInputArray = useFieldArray({
		control,
		name: 'book_summaries'
	})

	const todayWordsInputArray = useFieldArray({
		control,
		name: 'words_of_today'
	})

	const dispatch = useDispatch()

	const addAndUpdateJournal = data => {
		const duplicatedDate = updateJournal
			? journals.find(journal => journal.date === data.date && journal.id !== journalToUpdateId)
			: journals.find(journal => journal.date === data.date)
		if (duplicatedDate) {
			if (journalToUpdate) {
				setError(`A journal for ${data.date} already exists. Please choose another date for the edited journal.`)
			} else {
				setError(`A journal for ${data.date} already exists. If you want to edit the journal for ${data.date}, please choose update function instead.`)
			}
			return
		}

		const journalObject = {
			date: data.date,
			todos: data.todos ? data.todos.map((todo, index) => ({ ...todo, id: index })) : [],
			reflection: data.reflection,
			book_summaries: data.book_summaries ? data.book_summaries.map((summary, index) => ({ ...summary, id: index })) : [],
			words_of_today: data.words_of_today ? data.words_of_today.map((word, index) => ({ ...word, id: index })) : []
		}

		journalToUpdate
			? dispatch(updateJournal(journalToUpdateId, journalObject))
			: dispatch(createJournal(journalObject))
	}

	const onCancel = () => {
		journalToUpdate
			? dispatch(setDisplayedJournalId(journalToUpdateId))
			: dispatch(setDisplayedJournalId(journals[journals.length-1].id))
	}

	return (
		<form onSubmit={handleSubmit(addAndUpdateJournal)}>

			<div style={padding}>
				<button type="submit">save</button>
				<button type="reset" onClick={onCancel}>cancel</button>
			</div>
			<span>{error}</span>

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
				{todosInputArray.fields.length === 0 &&
					<button
						onClick={event => {
							event.preventDefault()
							todosInputArray.append({})
						}}
					>
						add a task
					</button>
				}
				{/* <br/> */}

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
							onClick={event => {
								event.preventDefault()
								todosInputArray.swap(index, Math.max(0, index-1))
							}}
						>
							move up
						</button>

						<button
							onClick={event => {
								event.preventDefault()
								todosInputArray.swap(index, Math.min(todosInputArray.fields.length-1, index+1))
							}}
						>
							move down
						</button>

						<button
							onClick={event => {
								event.preventDefault()
								todosInputArray.insert(index+1)
							}}
						>
							add
						</button>

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
								name={`book_summaries[${index}].title`}
								ref={register()}
							/>
							Chapter:
							<input
								name={`book_summaries[${index}].chapter`}
								ref={register()}
							/>
						</div>
						<textarea
							placeholder="chapter summary and your thoughts..."
							name={`book_summaries[${index}].content`}
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
				<button
					onClick={event => {
						event.preventDefault()
						todayWordsInputArray.append({})
					}}
				>
					add a word
				</button>

				{todayWordsInputArray.fields.map((word, index) => (
					<div
						key={word.id}
						style={padding}
					>
						<input
							placeholder="Word"
							name={`words_of_today[${index}].word`}
							ref={register()}
						/>
						<input
							placeholder="Definition..."
							name={`words_of_today[${index}].definition`}
							ref={register()}
						/>
						<button
							onClick={() => todayWordsInputArray.remove(index)}
						>
							delete
						</button>
					</div>
				))}
			</div>

		</form>
	)
}

export default AddAndUpdateJournal