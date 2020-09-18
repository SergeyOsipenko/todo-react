import {combineReducers} from 'redux' 
import doingReducer from './doings';
import {ADD_ROW, UPDATE_ROW_STATUS, DELETE_COMPLETED_ROWS, DELETE_ROW, TOGGLE_ROWS_STATUS, UPDATE_ROW_DESCRIPTION} from '../Utils/Constants';

export const localMiddleWare = (store) => (next) => (action) => {
	if(action.localStorage === undefined){
		next(action)
		return;
	}
	
	let doings = [...store.getState().doings];
	const {type, payload} = {...action.localStorage};

	switch(type){
		case ADD_ROW:                 
			doings.push({value: payload, description: `Simple description of ${payload}`, isCompleted: false});
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		case DELETE_ROW:
			doings.splice(payload, 1)
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		case UPDATE_ROW_STATUS:
			doings[payload.index].isCompleted = payload.value;
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		case UPDATE_ROW_DESCRIPTION:
			doings[payload.index].description = payload.value;
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		case DELETE_COMPLETED_ROWS:
			doings = doings.filter(d => !d.isCompleted);
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		case TOGGLE_ROWS_STATUS:
			doings.forEach(s => s.isCompleted = payload);
			localStorage.setItem('todo-react', JSON.stringify(doings));
			break;
		default:
			break;
	}

	store.dispatch(action.localStorage);
};

const mainReducer = combineReducers({ doings: doingReducer });

export default mainReducer;