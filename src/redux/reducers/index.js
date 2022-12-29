import { combineReducers } from 'redux';
import allGistsReducer from './allgistsreducer';
import singleGistReducer from './singlegistreducer';

const rootReducer = combineReducers({allGistsReducer, singleGistReducer});
export default rootReducer;