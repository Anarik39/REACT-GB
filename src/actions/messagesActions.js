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

export const botMessageActions = (userId) => (dispatch) => {
  setTimeout(() => {
    dispatch(sendMessageActions({ message: "Хех, Здарова!", userId, author: "bot" }));
  }, 1000);
};

export { sendMessageActions, deleteMessagesActions, addMessagesActions };
