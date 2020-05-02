import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMonthlyUpdateForm } from '../../reducers/monthliesReducer'

const Monthly = ({ monthly }) => {
	const dispatch = useDispatch()

	const date = monthly.date.substring(0, 10) + ' '  + monthly.date.substring(11, 19)
	console.log(new Date(monthly.date).getTimezoneOffset())
	return (
		<div className="monthly">
			<div>
				{date}
				<button
					onClick={() => dispatch(toggleMonthlyUpdateForm(monthly.id))}
				>
					Update
				</button>
			</div>
			{monthly.content}
		</div>
	)
}

export default Monthly