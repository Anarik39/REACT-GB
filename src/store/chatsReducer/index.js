import { ADD_CHAT, DELETE_CHAT } from "../types/ChatsTypes";

const initialState = {
  chats: [
    { id: 1, name: "egor" },
    { id: 2, name: "nikita" },
    { id: 3, name: "anar" },
    { id: 4, name: "petr" },
  ],
  id: 4,
};

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CHAT:
      return { ...state, chats: state.chats.filter((item) => item !== payload) };
    case ADD_CHAT:
      state.id++;
      return { ...state, chats: [...state.chats, { id: state.id, name: payload }] };
    default:
      return state;
  }
};

export default chatsReducer;
