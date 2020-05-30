import {applyMiddleware, createStore} from "redux";
import {allReducers} from "./reducers";
import logger from 'redux-thunk';

export const store = createStore(
    allReducers,
    applyMiddleware(logger)
);