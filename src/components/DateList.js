import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayedJournalId } from '../reducers/journalsReducer'

const DateList = () => {
	const dispatch = useDispatch()
	const journals = useSelector(state => state.journalsRedux.journals)

	return (
		<ul>
			{journals && journals.length > 0 && journals.map(journal =>
				<div
					key={journal.id}
					onClick={() => dispatch(setDisplayedJournalId(journal.id))}>
					{journal.date}
				</div>
			)}
		</ul>
	)
}

export default DateList