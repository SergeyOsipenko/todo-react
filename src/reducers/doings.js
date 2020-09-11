import {ADD_ROW, DELETE_ROW, UPDATE_ROW_STATUS, UPDATE_ROW_DESCRIPTION, DELETE_COMPLETED_ROWS, TOGGLE_ROWS_STATUS, SET_SELECTED_ROW } from '../Utils/Constants'

const doingReducer = (state = JSON.parse(localStorage.getItem('todo-react')) || {selected: 0, doings: []}, action) => {
    let copy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ADD_ROW :
            copy.doings = copy.doings.concat({value: action.payload.element.value, description: `Simple description of ${action.payload.element.value}`, isCompleted: false});
            action.payload.element.value = "";
            return copy;
        
        case DELETE_ROW:
            copy.doings.splice(action.payload, 1);
            return copy;
        
        case UPDATE_ROW_STATUS:
            copy.doings[action.payload].isCompleted = !copy.doings[action.payload].isCompleted;
            return copy;

        case UPDATE_ROW_DESCRIPTION:
            copy.doings[action.payload.index].description = action.payload.value;
            return copy;
        
        case DELETE_COMPLETED_ROWS:
            copy.doings = copy.doings.filter(d => !d.isCompleted);
            return copy;
        
        case TOGGLE_ROWS_STATUS:
            copy.doings.forEach(s => s.isCompleted = action.payload);
            return copy;

        case SET_SELECTED_ROW:
            copy.selected = action.payload;
            return copy;

        default:
            return copy;
    }
}

export default doingReducer;