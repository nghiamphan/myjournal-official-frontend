import React from 'react'
import XEffectCalendar from './components/XEffectCalendar'
import Journals from './components/Journals'
import AddJournal from './components/AddJournal'

const App = () => {

	return (
		<div className="App">
			<XEffectCalendar/>
			<Journals/>
			<AddJournal/>
		</div>
	)
}

export default App
