import { SEND_MESSAGE, DELETE_MESSAGES, ADD_MESSAGES } from "../store/types/MessagesTypes";

const sendMessageActions = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});
const deleteMessagesActions = (userId) => ({
  type: DELETE_MESSAGES,
  payload: userId,
});
const addMessagesActions = (userId) => ({
  type: ADD_MESSAGES,
  payload: userId,
});

export { sendMessageActions, deleteMessagesActions, addMessagesActions };
