import React from 'react'

const Monthly = ({ monthly }) => {
	const date = monthly.date.substring(0, 10) + ' '  + monthly.date.substring(11, 19)
	console.log(new Date(monthly.date).getTimezoneOffset())
	return (
		<div className="monthly">
			{date}
			<br/>
			{monthly.content}
		</div>
	)
}

export default Monthly