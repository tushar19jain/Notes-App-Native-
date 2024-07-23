import { combineReducers } from "redux";
import {notesReducer} from '../reducers/NotesReducer'
import {favReducer} from '../reducers/FavReducer'
export default combineReducers({
    notesReducer,
    favReducer
})