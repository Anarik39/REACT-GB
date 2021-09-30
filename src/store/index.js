import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./Profile";

export const store = createStore(profileReducer, composeWithDevTools());
