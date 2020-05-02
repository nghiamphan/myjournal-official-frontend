import React from 'react'
import { useSelector } from 'react-redux'
import XEffectCalendar from './XEffectCalendar'
import Monthly from './Monthly'
import MonthlyEditable from './MonthlyEditable'

const CalendarPage = () => {
	const monthlies = useSelector(state => state.monthlies)

	return (
		<div className="calendar-page flex-container">
			<XEffectCalendar/>
			{monthlies.length > 0 &&
			monthlies.map(monthly =>
				monthly.editable
					? <MonthlyEditable
						key={monthly.id}
						monthly={monthly}
					/>
					: <Monthly
						key={monthly.id}
						monthly={monthly}
					/>
			)}
		</div>
	)
}

export default CalendarPage