import React, { useState } from 'react'
import Journals from './components/Journals'
import AddJournal from './components/AddJournal'

const initialJournals = [
	{
		id: 1,
		date: '2019-05-30T17:30:31.098Z',
		todos: [
			{
				id: 1,
				task: 'Learn React for two hours',
				done: true
			},
			{
				id: 2,
				task: 'Learn to skate for one hour',
				done: false
			}
		],
		reflection: 'Today is good.',
		book_summary: [
			{
				id: 1,
				title: 'Catch-22',
				chapter: 'The Texan',
				summary: 'This chapter is very interesting'
			}
		],
		words_of_today: [
			{
				id: 1,
				word: 'Epiphany',
				definition: 'A suddent moment of insight or realization.'
			}
		]
	},
	{
		id: 2,
		date: '2019-05-30T17:30:31.098Z',
		todos: [
			{
				id: 1,
				task: 'Mediatation for 5 minutes',
				done: true
			}
		],
		reflection: 'Today is fantastic.',
		book_summary: [
			{
				id: 1,
				title: 'Selfish Gene',
				chapter: '12',
				summary: 'This chapter is very insightful.'
			}
		]
	}
]

const App = () => {
	const [journals, setJournals] = useState(initialJournals)

	const addJournal = (event) => {
		event.preventDefault()
	}
	return (
		<div className="App">
			<Journals journals={journals}/>
			<AddJournal addJournal={addJournal}/>
		</div>
	)
}

export default App
