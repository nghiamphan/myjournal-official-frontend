const currentJournalReducer = (state = '', action) => {
	switch (action.type) {
	case 'SET_DISPLAYED_JOURNAL':
		return action.id
	default:
		return state
	}
}

export const setDisplayedJournal = (id) => {
	return {
		type: 'SET_DISPLAYED_JOURNAL',
		id
	}
}

export default currentJournalReducer
