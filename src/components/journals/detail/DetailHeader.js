import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayedJournalId, setJournalToUpdateId, deleteJournal } from '../../../reducers/journalsReducer'
import { toggleFormOn } from '../../../reducers/displayFormReducer'
import { setSectionFilter } from '../../../reducers/sectionFilterReducer'

const DetailHeader = () => {
	const dispatch = useDispatch()
	const displayedJournalId = useSelector(state => state.journalsRedux.displayedJournalId)
	const displayForm = useSelector(state => state.displayForm)

	const addJournal = () => {
		dispatch(setDisplayedJournalId(null))
		dispatch(toggleFormOn())
	}

	const updateJournal = () => {
		dispatch(setJournalToUpdateId(displayedJournalId))
		dispatch(toggleFormOn())
	}

	return (
		<div>
			{(displayedJournalId || !displayForm) &&
					<button onClick={addJournal}>write new journal</button>
			}
			{displayedJournalId &&
				<>
					<button onClick={updateJournal}>update journal</button>
					<button onClick={() => dispatch(deleteJournal(displayedJournalId))}>delete journal</button>
					Filter:
					<select onChange={event => dispatch(setSectionFilter(event.target.value))}>
						<option value="all">All</option>
						<option value="todos">Todo</option>
						<option value="reflection">Reflection</option>
						<option value="book_summaries">Book Summary</option>
						<option value="quotes">Quote</option>
						<option value="words_of_today">Word Of The Day</option>
					</select>
				</>
			}
		</div>
	)
}

export default DetailHeader