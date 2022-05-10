import {combineReducers} from 'redux';
import {booksFeatureKey,bookReducer} from './books/bookReducer';
let rootReducer = combineReducers({
[booksFeatureKey] : bookReducer
});
export {rootReducer};