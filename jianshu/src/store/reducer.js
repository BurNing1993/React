import {reducer as HeaderReducer} from "../common/header/store";
import {reducer as HomeReducer} from "../pages/home/store";
import {reducer as DetailReducer} from "../pages/detail/store";
import { combineReducers } from "redux-immutable";
const reducer= combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailReducer
})
export default reducer;