import React from 'react'
import Journal from './Journal'

const Journals = ({ journals }) => {
	return (
		<ul>
			<h1>My Journal</h1>
			{journals.map(journal =>
				<Journal
					key={journal.id}
					journal={journal}/>
			)}
		</ul>
	)
}

export default Journals