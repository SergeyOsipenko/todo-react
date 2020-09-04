import {combineReducers} from 'redux' 
import doingReducer from './doings';
import filterReducer from './filters';

const mainReducer = combineReducers({
    doings: doingReducer,
    filterBy: filterReducer
});

export default mainReducer;