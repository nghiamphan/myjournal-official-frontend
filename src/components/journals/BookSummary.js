import React from 'react'

const BookSummary = ({ bookSummary }) => (
	<li>
		<strong>{bookSummary.title}</strong>: Chapter <i>{bookSummary.chapter}</i> <br/>
		{bookSummary.content}
	</li>
)

export default BookSummary
