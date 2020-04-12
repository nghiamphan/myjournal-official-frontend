import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from 'react-router-dom'
import XEffectCalendar from './components/XEffectCalendar'
import { initializeJournals } from './reducers/journalsReducer'
import MasterDetail from './components/MasterDetail'
import { setDisplayedJournal } from './reducers/displayedJournalReducer'

const App = () => {

	const journals = useSelector(state => state.journals)
	const firstDisplayedJournalId = (journals && journals.length > 0) ? journals[journals.length-1].id : null

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeJournals())
		dispatch(setDisplayedJournal(firstDisplayedJournalId))
	}, [dispatch, firstDisplayedJournalId])

	const padding = {
		padding: 5
	}

	return (
		<div className="container">
			<Router>
				<div>
					<Link style={padding} to="/calendar">X Effect Calendar</Link>
					<Link style={padding} to="/journals">Journals</Link>
				</div>

				<Switch>
					<Route path="/calendar">
						<XEffectCalendar/>
					</Route>
					<Route path="/journals">
						<MasterDetail/>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
