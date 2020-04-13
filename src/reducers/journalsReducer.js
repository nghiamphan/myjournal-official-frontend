import journalService from '../services/journalService'

const initialState = {
	journals: [],
	displayedJournalId: null
}

const journalsReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'INIT_JOURNALS':
		return {
			journals: action.data,
			displayedJournalId: action.data.length > 0 ? action.data[action.data.length-1].id : null
		}
	case 'CREATE_JOURNAL': {
		const newJournals = state.journals.concat(action.data)
			.sort((x, y) => x.date > y.date ? 1 : -1)
		return {
			journals: newJournals,
			displayedJournalId: action.data.id
		}
	}
	case 'DELETE_JOURNAL':
		return { ...state, journals: state.journals.filter(journal => journal.id !== action.id) }
	case 'SET_DISPLAYED_JOURNAL':
		return { ...state, displayedJournalId: action.id }
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

export const setDisplayedJournal = (id) => {
	return {
		type: 'SET_DISPLAYED_JOURNAL',
		id
	}
}

export default journalsReducer