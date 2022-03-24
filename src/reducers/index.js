import changeNum from "./addSub";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNum: changeNum
})

export default rootReducer