import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from 'react-router-dom'
import XEffectCalendar from './components/XEffectCalendar'
import { initializeJournals } from './reducers/journalsReducer'
import MasterDetail from './components/MasterDetail'

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
					<MasterDetail/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
