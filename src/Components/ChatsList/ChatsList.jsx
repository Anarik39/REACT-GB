import { List, ListItem, TextField, makeStyles } from "@material-ui/core/";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addChatAction, deleteChatAction } from "../../actions/chatsActions";
import { addMessagesActions, deleteMessagesActions } from "../../actions/messagesActions";

const Users = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 100px;
`;

const ButtonDelete = styled.button`
  color: white;
  outline: none;
  cursor: pointer;
  padding: 3px 15px;
  background: #282c34;
  border: 1px solid white;
  transition: 0.4s;
  margin-right: 10px;
  &:hover {
    color: #282c34;
    border: 1px solid #282c34;
    background: white;
  }
`;
const ButtonAdd = styled.button`
  color: white;
  outline: none;
  cursor: pointer;
  padding: 8px 20px;
  background: #282c34;
  border: 1px solid white;
  transition: 0.4s;
  margin-right: 10px;
  &:hover {
    color: #282c34;
    border: 1px solid #282c34;
    background: white;
  }
`;

const useStyles = makeStyles({
  input: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
});

const ChatsList = ({ chats }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [newChatName, setNewChatName] = useState("");

  const deleteUserChat = (user) => {
    dispatch(deleteChatAction(user));
    dispatch(deleteMessagesActions(user.id));
  };

  const addUserChat = () => {
    if (newChatName) {
      const id = Math.random().toString(36).substring(2);
      const newChat = { id: id, name: newChatName };
      dispatch(addChatAction(newChat));
      dispatch(addMessagesActions(id));
    }
  };

  return (
    <Users>
      <List>
        <ListItem>
          <TextField
            className={classes.input}
            label="Напишите имя для нового чата..."
            variant="outlined"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <ButtonAdd type="button" onClick={() => addUserChat()}>
            Добавить чат
          </ButtonAdd>
        </ListItem>
        {chats?.map((el) => (
          <ListItem key={el.id}>
            <ButtonDelete type="button" onClick={() => deleteUserChat(el)}>
              X
            </ButtonDelete>
            <Link to={`/users/${el.id}`}>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</Link>
          </ListItem>
        ))}
      </List>
    </Users>
  );
};

export default ChatsList;
