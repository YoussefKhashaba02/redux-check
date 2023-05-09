import { createStore } from "redux";
import { rootReducer } from "../Reducers/rootReducers";


export const store = createStore(rootReducer);
