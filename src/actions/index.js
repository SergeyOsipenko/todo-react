import {ADD_ROW, DELETE_ROW, UPDATE_ROW_STATUS, UPDATE_ROW_DESCRIPTION, DELETE_COMPLETED_ROWS, TOGGLE_ROWS_STATUS} from '../Utils/Constants'

export const addRow = (value) => {
	return {
		localStorage: {
			type: ADD_ROW,
			payload: value
		}
	}
}

export const deleteRow = (index) => {
	return {
		localStorage: {
			type: DELETE_ROW,
			payload: index
		}
	}
}

export const updateRowStatus = (index, value) => {
	return {
		localStorage: {
			type: UPDATE_ROW_STATUS,
			payload: { index, value }
		}
	}
}

export const updateRowDescription = (value) => {
	return {
		localStorage: {
			type: UPDATE_ROW_DESCRIPTION,
			payload: value
		}
	}
}

export const toggleRows = (value) => {
	return {
		localStorage: {
			type: TOGGLE_ROWS_STATUS,
			payload: value
		}
	}
}

export const deleteCompletedRows = () => {
	return {
		localStorage: {
			type: DELETE_COMPLETED_ROWS
		}
	}
}