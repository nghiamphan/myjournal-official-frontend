import React from 'react'

const BookSummary = ({ bookSummary }) => (
	<li>
		<strong>{bookSummary.title}</strong>: Chapter <i>{bookSummary.chapter}</i> <br/>
		{bookSummary.summary}
	</li>
)

export default BookSummary
