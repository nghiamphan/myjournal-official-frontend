import React, { useState, useEffect } from 'react'
import Journals from './components/Journals'
import AddJournal from './components/AddJournal'
import journalService from './services/journalService'

const App = () => {
	const [journals, setJournals] = useState([])

	useEffect( async () => {
		const initialJournals = await journalService.getAll()
		setJournals(initialJournals)
	}, [])

	return (
		<div className="App">
			<Journals journals={journals}/>
			<AddJournal/>
		</div>
	)
}

export default App
