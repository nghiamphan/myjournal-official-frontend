import React from 'react'

const Journal = ({ journal }) => {
	return (
		<li>
			<div>
				Date: {journal.date}
			</div>
			{journal.reflection}
		</li>
	)
}

export default Journal