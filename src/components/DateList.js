import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayedJournal } from '../reducers/currentJournalReducer'

const DateList = () => {
	const dispatch = useDispatch()
	const journals = useSelector(state => state.journals)

	return (
		<ul>
			<h1>My Journal</h1>
			{journals !== [] && journals.map(journal =>
				<div
					key={journal.id}
					onClick={() => dispatch(setDisplayedJournal(journal.id))}>
					{journal.date}
				</div>
			)}
		</ul>
	)
}

export default DateList