import { combineReducers } from "redux-immutable";

// reducer
import counterReducer from "./counter";
import userReducer from "./user";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});
export default reducer;
