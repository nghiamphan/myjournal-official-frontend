import monthlyService from '../services/monthlyService'

const monthliesReducer = (state = [], action) => {
	switch (action.type) {
	case 'INIT_MONTHLIES':
		return action.data
	case 'CREATE_MONTHLY':
		return state.concat(action.data)
	case 'UPDATE_MONTHLY':
		return state.map(monthly => monthly.id === action.data.id ? action.data : monthly)
	case 'DELETE_MONTHLY':
		return state.filter(monthly => monthly.id !== action.id)
	case 'USER_LOGOUT':
		return []
	default:
		return state
	}
}

export const initializeMonthlies = () => {
	return async dispatch => {
		const monthlies = await monthlyService.getAll()
		dispatch({
			type: 'INIT_MONTHLIES',
			data: monthlies
		})
	}
}

export const createMonthly = (monthlyObject) => {
	return async dispatch => {
		try {
			const newMonthly = await monthlyService.createMonthly(monthlyObject)
			dispatch({
				type: 'CREATE_MONTHLY',
				data: newMonthly
			})
		} catch (exception) {
			console.log(exception.message)
		}
	}
}

export const updateMonthly = (id, monthlyObject) => {
	return async dispatch => {
		try {
			const updatedMonthly = await monthlyService.updateMonthly(id, monthlyObject)
			dispatch({
				type: 'UPDATE_MONTHLY',
				data: updatedMonthly
			})
		}catch (exception) {
			console.log(exception.message)
		}
	}
}

export const deleteMonthly = id => {
	return async dispatch => {
		try {
			await monthlyService.deleteMonthly(id)
			dispatch({
				type: 'DELETE_MONTHLY',
				id
			})
		} catch (exception) {
			console.log(exception.message)
		}
	}
}

export default monthliesReducer