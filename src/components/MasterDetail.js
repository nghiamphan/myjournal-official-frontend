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
			<DateList/>
			{displayedJournal && <Journal journal={displayedJournal}/>}
		</>
	)
}

export default MasterDetail