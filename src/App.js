import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch, Route, Link, Redirect
} from 'react-router-dom'
import XEffectCalendar from './components/calendar/XEffectCalendar'
import MasterDetail from './components/journals/MasterDetail'
import Login from './components/login/Login'
import journalService from './services/journalService'
import { initializeJournals } from './reducers/journalsReducer'
import { userLogout } from './reducers/loginReducer'
import UserRegistration from './components/login/UserRegistration'
import Footer from './components/footer/Footer'

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

	return (
		<div>
			<Router>
				<nav className="nav bg-dark">
					{user &&
					<>
						<Link className="navbar-brand" to="/journals">My Journal</Link>
						<Link className="nav-link" to="/calendar">X Effect Calendar</Link>
						<Link	className="nav-link" to="/journals">Journals</Link>
						<Link
							className="nav-link ml-auto"
							onClick={() => dispatch(userLogout())}
							to="/login"
						>
							Logout
						</Link>
					</>
					}
				</nav>

				<Switch>
					<Route path="/login">
						{!user ? <Login/> : <Redirect to="/journals"/>}
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
			{/* <Footer/> */}
		</div>
	)
}

export default App
