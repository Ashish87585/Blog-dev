import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import categories from './categoryReducer'
import homeBlogsReducer from "./homeBlogsReducer";
import blogsCategoryReducer from "./blogsCategoryReducer";
import otherInfoReducer from "./otherInfoReducer";
import blogUserReducer from "./blogUserReducer";

export default combineReducers({
    authReducer,
    alertReducer,
    categories,
    homeBlogsReducer,
    blogsCategoryReducer,
    otherInfoReducer,
    blogUserReducer
});
