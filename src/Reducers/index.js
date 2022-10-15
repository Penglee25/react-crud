import { combineReducers } from "redux";

import authReducers from "./AuthReducer";
import productReducer from "./ProductReducer";

export const reducers = combineReducers({ authReducers, productReducer });
