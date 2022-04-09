import { combineReducers } from "redux";
import { userReducer } from '../reducer/addUserReducer'

export const rootReducer = combineReducers({
    user: userReducer,
})