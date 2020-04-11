import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from 'react-router-dom'
import XEffectCalendar from './components/XEffectCalendar'
import Journals from './components/Journals'
import AddJournal from './components/AddJournal'
import { initializeJournals } from './reducers/journalReducer'
import DateList from './components/DateList'

const App = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeJournals())
	}, [dispatch])

	const padding = {
		padding: 5
	}

	return (
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
					<DateList/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
