import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateList from './DateList'
import Journal from './Journal'
import AddAndUpdateJournal from './AddAndUpdateJournal'
import { deleteJournal, setDisplayedJournalId, setJournalToUpdateId } from '../reducers/journalsReducer'

const MasterDetail = () => {
	const [displayForm, setDisplayForm] = useState(false)

	const dispatch = useDispatch()
	const journals = useSelector(state => state.journalsRedux.journals)
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
					{displayedJournal
						? <Journal journal={displayedJournal}/>
						: displayForm
							? <AddAndUpdateJournal/>
							: <p>Write your first journal...</p>
					}
				</div>

			</div>
		</>
	)
}

export default MasterDetail