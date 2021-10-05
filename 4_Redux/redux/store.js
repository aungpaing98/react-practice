import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducers = combineReducers({
    totalCount : countReducer,
    usersInfo : personReducer,
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
