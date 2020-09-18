import {ADD_ROW, DELETE_ROW, UPDATE_ROW_STATUS, UPDATE_ROW_DESCRIPTION, DELETE_COMPLETED_ROWS, TOGGLE_ROWS_STATUS } from '../Utils/Constants'

const doingReducer = (state = [], action) => {
    let doings = state.slice();

    switch(action.type){
        case ADD_ROW :
            doings = doings.concat({value: action.payload, description: `Simple description of ${action.payload}`, isCompleted: false});
            return doings;
        
        case DELETE_ROW:
            doings.splice(action.payload, 1);
            return doings;
        
        case UPDATE_ROW_STATUS:
            doings[action.payload.index].isCompleted = action.payload.value;
            return doings;

        case UPDATE_ROW_DESCRIPTION:
            doings[action.payload.index].description = action.payload.value;
            return doings;
        
        case DELETE_COMPLETED_ROWS:
            doings = doings.filter(d => !d.isCompleted);
            return doings;
        
        case TOGGLE_ROWS_STATUS:
            doings.forEach(s => s.isCompleted = action.payload);
            return doings;

        default:
            return doings;
    }
}

export default doingReducer;