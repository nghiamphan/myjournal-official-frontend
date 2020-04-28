import React from 'react'

const BookSummary = ({ bookSummary }) => (
	<div className="book-summary-item card">
		<div className="row">
			<div className="col-auto book-title h6">
				{bookSummary.title}
			</div>
			{bookSummary.chapter &&
			<div className="col-auto">
				Chapter: <i>{bookSummary.chapter}</i>
			</div>
			}
		</div>
		{bookSummary.content}
	</div>
)

export default BookSummary
