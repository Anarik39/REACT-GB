import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profileReducer/index";
import chatsReducer from "./chatsReducer/index";
import messagesReducer from "./messagesReducer/index";

const reducers = combineReducers({
  profileReducer,
  chatsReducer,
  messagesReducer,
});

export const store = createStore(reducers, composeWithDevTools());
