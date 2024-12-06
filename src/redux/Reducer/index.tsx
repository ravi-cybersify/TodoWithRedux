import { combineReducers } from "redux";
import { todoReducers } from "./Reducer"; // Import the reducer correctly

const reducers = combineReducers({
  allTodos: todoReducers, // Use the reducer function
});

export default reducers;
