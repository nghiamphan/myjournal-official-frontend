import React from 'react'
import { useSelector } from 'react-redux'

const DateList = () => {
	const journals = useSelector(state => state.journals)

	return (
		<ul>
			<h1>My Journal</h1>
			{journals !== [] && journals.map(journal =>
				<div key={journal.id}>
					{journal.date}
				</div>
			)}
		</ul>
	)
}

export default DateList