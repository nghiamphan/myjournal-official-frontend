import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateList from './DateList'
import Journal from './Journal'
import AddAndUpdateJournal from './AddAndUpdateJournal'
import { deleteJournal, setDisplayedJournalId, setJournalToUpdateId } from '../reducers/journalsReducer'
import { setSectionFilter } from '../reducers/sectionFilterReducer'

const MasterDetail = () => {
	const [displayForm, setDisplayForm] = useState(false)

	const dispatch = useDispatch()
	const journals = useSelector(state => state.journalsRedux.journals)
	const sectionFilter = useSelector(state => state.sectionFilter)
	const displayedJournalId = useSelector(state => state.journalsRedux.displayedJournalId)
	const displayedJournal = displayedJournalId ? journals.find(journal => journal.id === displayedJournalId) : null

	const addJournal = () => {
		dispatch(setDisplayedJournalId(null))
		setDisplayForm(true)
	}

	const updateJournal = () => {
		dispatch(setJournalToUpdateId(displayedJournalId))
		setDisplayForm(true)
	}

	const detailHeader = () => {
		return (
			<div>
				{(displayedJournal || !displayForm) &&
					<button onClick={addJournal}>write new journal</button>
				}
				{displayedJournal &&
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

	return (
		<>
			<h1>My Journal</h1>
			<div className="row">
				<div className="col-3">
					<DateList/>
				</div>
				<div className="col-9">
					{detailHeader()}
					{sectionFilter === 'all'
						? displayedJournal
							? <Journal journal={displayedJournal}/>
							: displayForm
								? <AddAndUpdateJournal/>
								: <p>Write your first journal...</p>
						: journals.map(journal => <Journal key={journal.id} journal={journal} />)
					}
				</div>

			</div>
		</>
	)
}

export default MasterDetail