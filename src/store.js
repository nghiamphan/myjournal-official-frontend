import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import journalsReducer from './reducers/journalsReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
	loginRedux: loginReducer,
	journalsRedux: journalsReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store