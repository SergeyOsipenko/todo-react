import {combineReducers} from 'redux' 
import doingReducer from './doings';

const mainReducer = combineReducers({
    doings: doingReducer
});

export default mainReducer;