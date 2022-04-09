import { combineReducers } from "redux";
import { userReducer } from '../reducer/addUserReducer';
import { goodsReducer } from '../reducer/allGoods'


export const rootReducer = combineReducers({
    user: userReducer,
    goods: goodsReducer,
})