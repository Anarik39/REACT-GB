import { SEND_MESSAGE, DELETE_MESSAGES, ADD_MESSAGES } from "../types/MessagesTypes";

const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
};

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE:
      const { message, userId, author } = payload;
      return { ...state, [userId]: [...state[userId], { text: message, author: author }] };
    case DELETE_MESSAGES:
      delete state[payload];
      return { ...state };
    case ADD_MESSAGES:
      return { ...state, [payload]: [] };
    default:
      return state;
  }
};

export default messagesReducer;
