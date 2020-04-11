import React from 'react'
import { useSelector } from 'react-redux'
import Journal from './Journal'

const Journals = () => {
	const journals = useSelector(state => state.journals)

	return (
		<ul>
			<h1>My Journal</h1>
			{journals !== [] && journals.map(journal =>
				<Journal
					key={journal.id}
					journal={journal}/>
			)}
		</ul>
	)
}

export default Journals