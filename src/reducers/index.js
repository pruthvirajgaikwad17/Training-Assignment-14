import { combineReducers } from "redux";
import postsReducer from "./reducers";
const rootReducer = combineReducers({
  postsReducer,
});
export default rootReducer;
