import React from 'react'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar'

const XEffectCalendar = () => {
	const journals = useSelector(state => state.journals)
	let days = []
	for (let i = 0; i < journals.length; i++) {
		const day = new Date(journals[i].date)
		day.setMinutes(day.getTimezoneOffset())
		days.push(day)
	}
	console.log(days)

	const crossOffDays = ({ date, view }) => {
		if (view === 'month') {
			for (let i = 0; i < days.length; i++) {
				const day = days[i]
				if (day.getDate() === date.getDate()
					&& day.getMonth() === date.getMonth()
					&& day.getFullYear() === date.getFullYear()) {
					return 'cross-off-day'
				}
			}
		}
		return null
	}
	return (
		<Calendar tileClassName={crossOffDays}/>
	)
}

export default XEffectCalendar