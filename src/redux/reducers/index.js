import { combineReducers } from "redux";
import auth from "./AuthReducer";
import timing from "./TimingReducer";
import route from "./RouterReducer";
import date from "./DateReducer";
import changeRequests from "./ChangeRequestReducer";

const reducers = combineReducers({
  user: auth,
  time: timing,
  today: date,
  route: route,
  changeRequests: changeRequests,
});

export default reducers;
