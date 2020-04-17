import loginService from '../services/loginService'

const loggedInUser = window.localStorage.getItem('loggedInMyJournalAppUser')

const loginReducer = (state = loggedInUser, action) => {
	switch (action.type) {
	case 'USER_LOGIN':
		return action.user
	case 'REMOVE_LOGGED_IN_USER':
		return null
	default:
		return state
	}
}

export const userLogin = (username, password) => {
	return async dispatch => {
		try {
			const user = await loginService.login({
				username, password
			})

			window.localStorage.setItem(
				'loggedInMyJournalAppUser', JSON.stringify(user)
			)

			dispatch({
				type: 'USER_LOGIN',
				user
			})
		} catch (exception) {
			console.log(exception.message)
			alert('wrong credentials')
		}
	}
}

export const removeLoggedInUser = () => {
	return {
		type: 'REMOVE_LOGGED_IN_USER'
	}
}

export default loginReducer