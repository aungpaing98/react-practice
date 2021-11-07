import { createStore } from "redux";
import { combineReducers } from "redux";

import CountReducer from "./reducers/count";
import PersonReducer from "./reducers/person";

const AllReducers = combineReducers({
  count: CountReducer,
  person: PersonReducer,
});

export default createStore(AllReducers);
