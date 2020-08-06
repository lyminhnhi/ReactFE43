import { combineReducers } from "redux";
import GameReducer from "./GameReducer"
import QLSVReducer from "./QLSVReducer";

const rootReducer = combineReducers({
    GameReducer, QLSVReducer,
});

export default rootReducer