import { combineReducers } from 'redux'; // for multiple reducers
import LibraryReducer from './LibraryReducer';
export default combineReducers({
    libraries: LibraryReducer
});
