import {combineReducers} from 'redux' 
import doingReducer from './doings';
import {ADD_ROW, UPDATE_ROW_STATUS, DELETE_COMPLETED_ROWS, DELETE_ROW, TOGGLE_ROWS_STATUS, SET_SELECTED_ROW} from '../Utils/Constants';

export const localMiddleWare = (state) => (next) => (action) => {
    const todo = JSON.parse(JSON.stringify(state.getState().todo));
    switch(action.type){
        case ADD_ROW:
            todo.doings.push({value: action.payload.element.value, description: `Simple description of ${action.payload.element.value}`, isCompleted: false});
            break;
        case DELETE_ROW:
            todo.doings.splice(action.payload, 1)
            break;
        case UPDATE_ROW_STATUS:
            todo.doings[action.payload].isCompleted = !todo.doings[action.payload].isCompleted;
            break;
        case DELETE_COMPLETED_ROWS:
            todo.doings = todo.doings.filter(d => !d.isCompleted);
            break;
        case TOGGLE_ROWS_STATUS:
            todo.doings.forEach(s => s.isCompleted = action.payload);
            break;
        case SET_SELECTED_ROW:
            todo.selected = action.payload;
            break;
        default:
            break;
    }

    localStorage.setItem('todo-react', JSON.stringify(todo));
    next(action);
};

const mainReducer = combineReducers({ todo: doingReducer });

export default mainReducer;