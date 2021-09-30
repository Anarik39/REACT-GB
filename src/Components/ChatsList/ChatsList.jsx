import { List, ListItem } from "@material-ui/core/";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Users = styled.div`
  width: 100%;
  max-width: 200px;
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

const ChatsList = ({ chats, setChats }) => {
  const deleteUserDialog = (user) => {
    setChats((prevstate) => prevstate.filter((item) => item !== user));
  };

  return (
    <Users>
      <List>
        {chats.map((el) => (
          <ListItem key={el.id}>
            <ButtonDelete type="button" onClick={() => deleteUserDialog(el)}>
              X
            </ButtonDelete>
            <Link to={`/users/${el.name}`}>
              {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
            </Link>
          </ListItem>
        ))}
      </List>
    </Users>
  );
};

export default ChatsList;
