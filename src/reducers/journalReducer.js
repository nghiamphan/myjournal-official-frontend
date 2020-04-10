import journalService from '../services/journalService'

const journalReducer = (state = [], action) => {
	switch (action.type) {
	case 'INIT_JOURNALS':
		return action.data
	case 'NEW_JOURNAL': {
		const newState = state.concat(action.data)
		newState.sort((x, y) => x.date > y.date ? 1 : -1)
		return newState
	}
	default:
		return state
	}
}

export const initializeJournals = () => {
	return async dispatch => {
		const journals = await journalService.getAll()
		journals.sort((x, y) => x.date > y.date ? 1 : -1)
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