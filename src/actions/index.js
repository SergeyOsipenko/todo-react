import {ADD_ROW, DELETE_ROW, UPDATE_ROW_STATUS, DELETE_COMPLETED_ROWS, TOGGLE_ROWS_STATUS} from '../Utils/Constants'

export const addRow = (event) => {
    return {
        type: ADD_ROW,
        payload: event
    }
}

export const deleteRow = (index) => {
    return {
        type: DELETE_ROW,
        payload: index
    }
}

export const updateRowStatus = (index) => {
    return {
        type: UPDATE_ROW_STATUS,
        payload: index
    }
}

export const toggleRows = (value) => {
    return {
        type: DELETE_COMPLETED_ROWS,
        payload: value
    }
}

export const deleteCompletedRows = () => {
    return {
        type: TOGGLE_ROWS_STATUS
    }
}