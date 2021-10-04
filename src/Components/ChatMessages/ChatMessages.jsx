import styled from "styled-components";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { Redirect, useParams } from "react-router";
import { useSelector } from "react-redux";

const styles = makeStyles({
  item: {
    justifyContent: "flex-start",
    flexDirection: "column",
    wordWrap: "break-word",
    alignItems: "normal",
  },
  ulAnswers: {
    justifyContent: "flex-end",
    color: "red",
    wordWrap: "break-word",
    alignItems: "normal",
  },
});

const Chat = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  max-width: 600px;
  width: 100%;
  background: white;
  color: black;
  border-radius: 0 0 10px 10px;
  min-height: 60vh;
  height: 100%;
  margin-left: auto;
`;

const ChatMessages = ({ chats }) => {
  const { userId } = useParams();
  const [answers, setAnswers] = useState([]);
  const classes = styles();

  const messages = useSelector((state) => state.messagesReducer[userId]);

  useEffect(() => {
    if (messages?.length !== 0) {
      setTimeout(() => {
        setAnswers((prevState) => [...prevState, "Хех, Здарова!"]);
      }, 1000);
    }
  }, [messages]);

  if (!chats.find((user) => String(user.id) === userId)) {
    return <Redirect to="/users" />;
  }

  return (
    <Chat>
      <List>
        {messages?.map((el, id) => (
          <ListItem className={classes.item} key={id}>
            {el.text}
          </ListItem>
        ))}
      </List>
      <List>
        {answers?.map((el, id) => (
          <ListItem className={classes.ulAnswers} key={id}>
            {el}
          </ListItem>
        ))}
      </List>
    </Chat>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.array,
};

export default ChatMessages;
