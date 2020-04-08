import journalService from '../services/journalService'

const journalReducer = (state = [], action) => {
	switch (action.type) {
	case 'INIT_JOURNALS':
		return action.data
	case 'NEW_JOURNAL':
		return state.concat(action.data)
	default:
		return state
	}
}

export const initializeJournals = () => {
	return async dispatch => {
		const journals = await journalService.getAll()
		dispatch({
			type: 'INIT_JOURNALS',
			data: journals
		})
	}
}

export const createJournal = (journalObject) => {
	return async dispatch => {
		const newJournal = await journalService.createJournal(journalObject)
		dispatch({
			type: 'NEW_JOURNAL',
			data: newJournal
		})
	}
}

export default journalReducer