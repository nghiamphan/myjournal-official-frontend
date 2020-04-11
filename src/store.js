import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import currentJournalReducer from './reducers/currentJournalReducer'
import journalReducer from './reducers/journalReducer'

const reducer = combineReducers({
	displayedJournal: currentJournalReducer,
	journals: journalReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store