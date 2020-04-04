import React, { useState } from 'react'
import Journals from './components/Journals'

const initialJournals = [
	{
		id: 1,
		date: '2019-05-30T17:30:31.098Z',
		todos: [
			{
				job: 'Learn React for two hours',
				done: true
			},
			{
				job: 'Learn to skate for one hour',
				done: false
			}
		],
		reflection: 'Today is good.',
		book_summary: [
			{
				title: 'Catch-22',
				chapter: 'The Texan',
				summary: 'This chapter is very interesting'
			}
		],
		words_of_the_day: [
			{
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
				job: 'Mediatation for 5 minutes',
				done: true
			}
		],
		reflection: 'Today is fantastic.',
		book_summary: [
			{
				title: 'Selfish Gene',
				chapter: '12',
				summary: 'This chapter is very insightful.'
			}
		]
	}
]

const App = () => {
	const [journals, setJournals] = useState(initialJournals)
	return (
		<div className="App">
			<Journals journals={journals}/>
		</div>
	)
}

export default App
