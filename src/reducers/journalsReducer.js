import journalService from '../services/journalService'

const journalsReducer = (state = [], action) => {
	switch (action.type) {
	case 'INIT_JOURNALS':
		return action.data
	case 'CREATE_JOURNAL': {
		return state.concat(action.data)
			.sort((x, y) => x.date > y.date ? 1 : -1)
	}
	case 'DELETE_JOURNAL':
		return state.filter(journal => journal.id !== action.id)
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
			type: 'CREATE_JOURNAL',
			data: newJournal
		})
	}
}

export const deleteJournal = id => {
	return async dispatch => {
		await journalService.deleteJournal(id)
		dispatch({
			type: 'DELETE_JOURNAL',
			id
		})
	}
}

export default journalsReducer