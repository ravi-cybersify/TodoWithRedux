// combine all reducers

import { combineReducers } from "redux";
import { setTodos } from "../Action/Action";

const reducers = combineReducers({
    allTodos : setTodos,
});

export default reducers;