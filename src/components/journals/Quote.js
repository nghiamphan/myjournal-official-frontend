import React from 'react'

const Quote = ({ quote }) => (
	<div>
		<i>{quote.content}</i>
		{quote.source &&
		<div>
			Source: {quote.source}
		</div>
		}
		{quote.comment &&
		<div>
			Comment: {quote.comment}
		</div>
		}
	</div>
)

export default Quote