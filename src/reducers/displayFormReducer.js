const displayFormReducer = (state = false, action) => {
	switch (action.type) {
	case 'SET_FORM_DISPLAY_ON':
		return true
	case 'SET_FORM_DISPLAY_OFF':
		return false
	case 'USER_LOGOUT':
		return false
	default:
		return state
	}
}

export const toggleFormOn = () => {
	return {
		type: 'SET_FORM_DISPLAY_ON'
	}
}

export const toggleFormOff = () => {
	return {
		type: 'SET_FORM_DISPLAY_OFF'
	}
}

export default displayFormReducer