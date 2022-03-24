import changeNum from "./addSub";
import showName from "./showName";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNum: changeNum,
  showName: showName
})

export default rootReducer