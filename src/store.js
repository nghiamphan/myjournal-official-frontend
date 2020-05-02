import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import journalsReducer from './reducers/journalsReducer'
import loginReducer from './reducers/loginReducer'
import sectionFilterReducer from './reducers/sectionFilterReducer'
import displayFormReducer from './reducers/displayFormReducer'
import monthliesReducer from './reducers/monthliesReducer'
import displayMonthlyFormReducer from './reducers/displayMonthlyFormReducer'

const reducer = combineReducers({
	loginRedux: loginReducer,
	journalsRedux: journalsReducer,
	sectionFilter: sectionFilterReducer,
	displayForm: displayFormReducer,
	monthlies: monthliesReducer,
	displayMonthlyForm: displayMonthlyFormReducer,
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store