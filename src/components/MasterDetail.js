import React from 'react'
import { useSelector } from 'react-redux'
import DateList from './DateList'
import Journal from './Journal'

const MasterDetail = () => {
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
					{displayedJournal && <Journal journal={displayedJournal}/>}
				</div>

			</div>
		</>
	)
}

export default MasterDetail