import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import displayedJournalReducer from './reducers/displayedJournalReducer'
import journalsReducer from './reducers/journalsReducer'

const reducer = combineReducers({
	displayedJournal: displayedJournalReducer,
	journals: journalsReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store