import {combineReducers} from "redux";
import books from "./books";
import cart from "./cart";
import thunk from 'redux-thunk';

export const allReducers = combineReducers({
        books,
        cart,
    }
)