import { DELETE_CHAT, ADD_CHAT } from "../store/types/ChatsTypes";

export const deleteChatAction = (chat) => ({
  type: DELETE_CHAT,
  payload: chat,
});

export const addChatAction = (name) => ({
  type: ADD_CHAT,
  payload: name,
});
