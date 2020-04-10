import React from 'react'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar'

const XEffectCalendar = () => {
	const journals = useSelector(state => state.journals)
	let days = []
	if (journals.length > 0) {
		journals.map(journal => {
			const notDoneTodos = journal.todos.filter(todo => !todo.done)
			if (notDoneTodos.length === 0) {
				const day = new Date(journal.date)
				day.setMinutes(day.getTimezoneOffset())
				days.push(day)
			}
		})
	}

	const crossOffDays = ({ date, view }) => {
		if (view === 'month') {
			for (let i = 0; i < days.length; i++) {
				const day = days[i]
				if (day.getTime() === date.getTime()) {
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