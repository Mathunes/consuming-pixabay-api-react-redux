import { searchImageReducer } from './searchImageReducer.js';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    searchImageState: searchImageReducer,
})