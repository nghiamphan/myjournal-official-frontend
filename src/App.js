import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch, Route, Link, Redirect
} from 'react-router-dom'
import XEffectCalendar from './components/XEffectCalendar'
import MasterDetail from './components/MasterDetail'
import Login from './components/Login'
import journalService from './services/journalService'
import { initializeJournals } from './reducers/journalsReducer'
import { userLogout } from './reducers/loginReducer'
import UserRegistration from './components/UserRegistration'

const App = () => {

	// user object received from backend contains token, username and password
	const user = useSelector(state => state.loginRedux)
	if (user) {
		journalService.setToken(user.token)
	}

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeJournals())
	}, [dispatch, user])

	const padding = {
		padding: 5
	}

	return (
		<div className="container">

			<Router>
				{user &&
					<div>
						<Link style={padding} to="/calendar">X Effect Calendar</Link>
						<Link style={padding} to="/journals">Journals</Link>
						<button onClick={() => dispatch(userLogout())}>logout</button>
					</div>
				}
				<Switch>
					<Route path="/login">
						{!user ? <Login/> : <Redirect to="/calendar"/>}
					</Route>
					<Route path='/register'>
						<UserRegistration/>
					</Route>
					<Route path="/calendar">
						{user ? <XEffectCalendar/> : <Redirect to="/login"/>}
					</Route>
					<Route path="/journals">
						{user ? <MasterDetail/> : <Redirect to="/login"/>}
					</Route>
					<Route path="/">
						{user ? <Redirect to="/calendar"/> : <Redirect to="/login"/>}
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
