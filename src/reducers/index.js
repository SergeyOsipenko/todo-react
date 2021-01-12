import {combineReducers} from 'redux' 
import doingReducer from './doings';
import {ADD_ROW, UPDATE_ROW_STATUS, DELETE_COMPLETED_ROWS, DELETE_ROW, TOGGLE_ROWS_STATUS, UPDATE_ROW_DESCRIPTION, DESCRIPTION_EXAMPLE, SET_LOCAL_STORAGE_REQUEST, TO_DO} from '../Utils/Constants';
import {asyncLocalStorage} from '../Utils/Async';

export const localMiddleWare = (store) => (next) => (action) => {
	if(action.localStorage === undefined){
		next(action)
		return;
	}
	
	const {type, payload, redirectTo, request, success, failure} = {...action.localStorage};

	store.dispatch({type: request});
	if(request === SET_LOCAL_STORAGE_REQUEST){
		let doings = [...store.getState().doings.data];

		switch(type){
			case ADD_ROW:                 
				doings.push({value: payload, description: `${DESCRIPTION_EXAMPLE} ${payload}`, isCompleted: false});
				break;
			case DELETE_ROW:
				doings.splice(payload, 1);
				break;
			case UPDATE_ROW_STATUS:
				doings[payload.index].isCompleted = payload.value;
				break;
			case UPDATE_ROW_DESCRIPTION:
				doings[payload.index].description = payload.value;
				break;
			case DELETE_COMPLETED_ROWS:
				doings = doings.filter(d => !d.isCompleted);
				break;
			case TOGGLE_ROWS_STATUS:
				doings.forEach(s => s.isCompleted = payload);
				break;
			default:
				break;
		}

		asyncLocalStorage.setItem(TO_DO, doings)
			.then(
				() => asyncLocalStorage.getItem(TO_DO),
				error => { store.dispatch({type: failure, payload: error}) }
			)
			.then(value => {
				store.dispatch({type: success, payload: JSON.parse(value) || [], redirectTo});
			});
	} else {
		asyncLocalStorage.getItem(TO_DO)
			.then(
				value => { store.dispatch({type: success, payload: JSON.parse(value) || []}); },
				error => { store.dispatch({type: failure, payload: error}); }
			);
	}
};

const mainReducer = combineReducers({ doings: doingReducer });

export default mainReducer;