import {
	SET_LOCAL_STORAGE_REQUEST,
	SET_LOCAL_STORAGE_SUCCESS,
	SET_LOCAL_STORAGE_FAILURE,
	GET_LOCAL_STORAGE_REQUEST,
	GET_LOCAL_STORAGE_SUCCESS,
	GET_LOCAL_STORAGE_FAILURE,
	CLEAR_REDIRECT_TO
} from '../Utils/Constants'

export const setLocalStorage = (type, data = null, link = '') => {
	return {
		localStorage: {
			type: type,
			payload: data,
			redirectTo: link,
			request: SET_LOCAL_STORAGE_REQUEST,
			success: SET_LOCAL_STORAGE_SUCCESS,
			failure: SET_LOCAL_STORAGE_FAILURE,
			timeStamp: Date.now()
		}
	}
}

export const getLocalStorage = () => {
	return {
		localStorage: {
			request: GET_LOCAL_STORAGE_REQUEST,
			success: GET_LOCAL_STORAGE_SUCCESS,
			failure: GET_LOCAL_STORAGE_FAILURE,
			timeStamp: Date.now()
		}
	}
}

export const clearRedirectTo = () => {
	return {
		type: CLEAR_REDIRECT_TO
	}
}