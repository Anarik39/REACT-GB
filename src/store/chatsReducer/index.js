import { ADD_CHAT, DELETE_CHAT } from "../types/ChatsTypes";

const initialState = [
  { id: 1, name: "egor" },
  { id: 2, name: "nikita" },
  { id: 3, name: "anar" },
  { id: 4, name: "petr" },
];

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CHAT:
      return state.filter((item) => item !== payload);
    case ADD_CHAT:
      return [...state, { ...payload }];
    default:
      return state;
  }
};

export default chatsReducer;
