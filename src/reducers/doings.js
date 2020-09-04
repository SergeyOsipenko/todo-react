const doingReducer = (state = [{value: 'todo', isCompleted: false}], action) => {
    let doings = state.slice();
    switch(action.type){
        case "ADD_ROW" :
            if(action.payload.key !== "Enter" || !action.payload.element.value)
                return state
            doings = doings.concat({value: action.payload.element.value, isCompleted: false});
            action.payload.element.value = "";
            return doings;
        
        case "DELETE_ROW":
            doings.splice(action.payload, 1);
            return doings;
        
        case "UPDATE_ROW_STATUS":
            doings[action.payload].isCompleted = !doings[action.payload].isCompleted;
            return doings;
        
        case "DELETE_COMPLETED_ROWS":
            return doings = doings.filter(s => !s.isCompleted);
        
        case "TOGGLE_ROWS_STATUS":
            doings.forEach(s => s.isCompleted = action.payload);
            return doings;
    
        default:
            return doings;
    }
}

export default doingReducer;