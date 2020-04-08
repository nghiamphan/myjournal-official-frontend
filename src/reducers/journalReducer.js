import journalService from '../services/journalService'

const journalReducer = (state = [], action) => {
	switch (action.type) {
	case 'INIT_JOURNALS':
		return action.data
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

export default journalReducer