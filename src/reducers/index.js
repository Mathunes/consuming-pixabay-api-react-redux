import { searchImageReducer as searchImage } from './searchImageReducer.js';
import { openImageReducer as openImage } from './openImageReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    searchImage,
    openImage,
});