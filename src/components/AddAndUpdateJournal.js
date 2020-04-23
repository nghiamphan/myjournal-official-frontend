import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createJournal, updateJournal, setDisplayedJournalId } from '../reducers/journalsReducer'
import { FirstAddButton, ItemButtons } from './buttons/JournalFormButtons'

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

	const errorText = 'This field is required.'

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
			todos: data.todos ? data.todos : [],
			reflection: data.reflection,
			book_summaries: data.book_summaries ? data.book_summaries : [],
			words_of_today: data.words_of_today ? data.words_of_today : []
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
				{errors.date && <span>{errorText}</span>}
			</div>

			<div>
				<h3>Todos</h3>
				{todosInputArray.fields.length === 0 &&
					<FirstAddButton
						inputArray={todosInputArray}
						buttonText="add a task"
					/>
				}

				{todosInputArray.fields.map((item, index) => (
					<div key={item.id}>
						<input
							type="checkbox"
							name={`todos[${index}].done`}
							ref={register()}
						/>
						<input
							name={`todos[${index}].task`}
							ref={register({
								required: true,
								pattern: /[A-Za-z0-9]+/
							})}
						/>

						<ItemButtons
							inputArray={todosInputArray}
							index={index}
						/>
					</div>
				))}

				{errors.todos && <span>{errorText}</span>}
			</div>


			<div>
				<h3>How is your day?</h3>
				<div>
					<textarea
						name="reflection"
						ref={register({ required: true })}
					/>
				</div>
				{errors.reflection && <span>{errorText}</span>}
			</div>

			<div>
				<h3>Book Summaries</h3>
				{bookSummariesInputArray.fields.length === 0 &&
					<FirstAddButton
						inputArray={bookSummariesInputArray}
						buttonText="add a summary"
					/>
				}

				{bookSummariesInputArray.fields.map((summary, index) => (
					<div key={summary.id} style={padding}>
						<div>
							Title:
							<input
								name={`book_summaries[${index}].title`}
								ref={register({
									required: true,
									pattern: /[A-Za-z0-9]+/
								})}
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
							ref={register({
								required: true,
								pattern: /[A-Za-z0-9]+/
							})}
						/>

						<br/>
						<ItemButtons
							inputArray={bookSummariesInputArray}
							index={index}
						/>
					</div>
				))}

				{errors.book_summaries && <span>{errorText}</span>}
			</div>

			<div>
				<h3>Words of the day</h3>
				{todayWordsInputArray.fields.length === 0 &&
					<FirstAddButton
						inputArray={todayWordsInputArray}
						buttonText="add a word"
					/>
				}

				{todayWordsInputArray.fields.map((word, index) => (
					<div
						key={word.id}
						style={padding}
					>
						<input
							placeholder="Word"
							name={`words_of_today[${index}].word`}
							ref={register({
								required: true,
								pattern: /[A-Za-z0-9]+/
							})}
						/>
						<input
							placeholder="Definition..."
							name={`words_of_today[${index}].definition`}
							ref={register({
								required: true,
								pattern: /[A-Za-z0-9]+/
							})}
						/>

						<ItemButtons
							inputArray={todayWordsInputArray}
							index={index}
						/>
					</div>
				))}

				{errors.words_of_today && <span>{errorText}</span>}
			</div>

		</form>
	)
}

export default AddAndUpdateJournal