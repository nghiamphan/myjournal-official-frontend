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
	case 'UPDATE_JOURNAL':
		return { ...state, journals: state.journals.map(journal => journal.id === action.data.id ? action.data : journal) }
	case 'DELETE_JOURNAL': {
		let nextDisplayedJournalId = null
		for (let i = 0; i < state.journals.length; i++) {
			const journal = state.journals[i]
			if (journal.id === action.id) {
				if (i < state.journals.length - 1) {
					nextDisplayedJournalId = state.journals[i+1].id
					break
				} else if (i > 0) {
					nextDisplayedJournalId = state.journals[i-1].id
					break
				}
			}
		}
		return {
			journals: state.journals.filter(journal => journal.id !== action.id),
			displayedJournalId: nextDisplayedJournalId
		}
	}
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
		try {
			const newJournal = await journalService.createJournal(journalObject)
			dispatch({
				type: 'CREATE_JOURNAL',
				data: newJournal
			})
		} catch (exception) {
			console.log(exception.message)
		}
	}
}

export const updateJournal = (id, journalObject) => {
	return async dispatch => {
		try {
			const updatedJournal = await journalService.updateJournal(id, journalObject)
			dispatch({
				type: 'UPDATE_JOURNAL',
				data: updatedJournal
			})
		} catch (exception) {
			console.log(exception.message)
		}
	}
}

export const deleteJournal = id => {
	return async dispatch => {
		try {
			await journalService.deleteJournal(id)
			dispatch({
				type: 'DELETE_JOURNAL',
				id
			})
		} catch (exception) {
			console.log(exception.message)
		}
	}
}

export const setDisplayedJournal = (id) => {
	return {
		type: 'SET_DISPLAYED_JOURNAL',
		id
	}
}

export default journalsReducer