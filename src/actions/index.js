export const addRow = (event) => {
    return {
        type: "ADD_ROW",
        payload: event
    }
}

export const deleteRow = (index) => {
    return {
        type: "DELETE_ROW",
        payload: index
    }
}

export const updateRowStatus = (index) => {
    return {
        type: "UPDATE_ROW_STATUS",
        payload: index
    }
}

export const toggleRows = (value) => {
    return {
        type: "TOGGLE_ROWS_STATUS",
        payload: value
    }
}

export const deleteCompletedRows = () => {
    return {
        type: "DELETE_COMPLETED_ROWS"
    }
}

export const setFilter = (value) => {
    return {
        type: "SET_FILTER",
        payload: value
    }
}