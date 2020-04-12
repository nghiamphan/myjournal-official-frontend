import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateList from './DateList'
import Journal from './Journal'
import AddJournal from './AddJournal'
import { setDisplayedJournal } from '../reducers/displayedJournalReducer'

const MasterDetail = () => {
	const dispatch = useDispatch()
	const journals = useSelector(state => state.journals)
	const displayedJournalId = useSelector(state => state.displayedJournal)
	const displayedJournal = displayedJournalId ? journals.find(journal => journal.id === displayedJournalId) : null

	return (
		<>
			<h1>My Journal</h1>
			<div className="row">
				<div className="col-3">
					<DateList/>
				</div>
				<div className="col-9">
					{displayedJournal && <button onClick={() => dispatch(setDisplayedJournal(null))}>write new journal</button>}
					{displayedJournal && <Journal journal={displayedJournal}/>}
					{!displayedJournal && <AddJournal/>}
				</div>

			</div>
		</>
	)
}

export default MasterDetail