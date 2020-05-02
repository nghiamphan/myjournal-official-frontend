import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMonthlyUpdateForm, deleteMonthly } from '../../reducers/monthliesReducer'
import displayDate from '../../utils/displayDate'

const Monthly = ({ monthly }) => {
	const dispatch = useDispatch()

	return (
		<div className="monthly">
			<div>
				{displayDate(monthly.date)}
				<button
					onClick={() => dispatch(toggleMonthlyUpdateForm(monthly.id))}
				>
					Update
				</button>
				<button
					onClick={() => dispatch(deleteMonthly(monthly.id))}
				>
					Delete
				</button>
			</div>
			{monthly.content}
		</div>
	)
}

export default Monthly