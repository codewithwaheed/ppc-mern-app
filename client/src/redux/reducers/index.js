import { combineReducers } from "redux";
// Reducers Import
import { authReducer } from "./components/authReducers";
export default combineReducers({
  auth: authReducer,
});
