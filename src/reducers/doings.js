import { CLEAR_REDIRECT_TO, GET_LOCAL_STORAGE_FAILURE, GET_LOCAL_STORAGE_REQUEST, GET_LOCAL_STORAGE_SUCCESS, SET_LOCAL_STORAGE_FAILURE, SET_LOCAL_STORAGE_REQUEST, SET_LOCAL_STORAGE_SUCCESS } from '../Utils/Constants'

const initialState = {
    isLoading: false,
    data: [],
    error: '',
    redirectTo: ''
}

const doingReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOCAL_STORAGE_REQUEST:
            return {
                ...state
            }
        case SET_LOCAL_STORAGE_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                redirectTo: action.redirectTo,
                error: ''
            }
        case SET_LOCAL_STORAGE_FAILURE:
            return {
                isLoading: false,
                data: state.data.slice(),
                error: action.payload,
                redirectTo: ''
            }
        case GET_LOCAL_STORAGE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_LOCAL_STORAGE_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                error: '',
                redirectTo: ''
            }
        case GET_LOCAL_STORAGE_FAILURE:
            return {
                isLoading: false,
                data: [],
                error: action.payload,
                redirectTo: ''
            }
        case CLEAR_REDIRECT_TO:
            return {
                ...state,
                redirectTo: ''
            }
        default:
           return state
    }
}

export default doingReducer;