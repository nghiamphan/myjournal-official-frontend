import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { setDisplayedJournalId } from '../../../reducers/journalsReducer'

const DateList = () => {
	const dispatch = useDispatch()
	const journals = useSelector(state => state.journalsRedux.journals)
	const displayedJournalId = useSelector(state => state.journalsRedux.displayedJournalId)
	const journalToUpdateId = useSelector(state => state.journalsRedux.journalToUpdateId)

	return (
		<div className="date-list-page">
			{journals && journals.length > 0 && journals.map(journal =>
				<div
					key={journal.id}
					onClick={() => dispatch(setDisplayedJournalId(journal.id))}>
					<div className="h6 date-list-item">
						{journal.date}&nbsp;
						{(journal.id === displayedJournalId || journal.id === journalToUpdateId )&&
						<FontAwesomeIcon icon={faEllipsisV}/>}
					</div>
				</div>
			)}
		</div>
	)
}

export default DateList