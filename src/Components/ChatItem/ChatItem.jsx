import styled from "styled-components";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { List, ListItem, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  item: {
    justifyContent: "center",
  },
  ulAnswers: {
    color: "red",
  },
});

const Chat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  max-width: 600px;
  width: 100%;
  background: white;
  color: black;
  border-radius: 10px;
  min-height: 60vh;
  height: 100%;
`;

const ChatItem = ({ messages }) => {
  const [answers, setAnswers] = useState([]);
  const classes = styles();

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setAnswers((prevState) => [...prevState, "Хех, Здарова!"]);
      }, 1000);
  }, [messages]);

  return (
    <>
      <Chat>
        <List>
          {messages.map((el) => (
            <ListItem className={classes.item} key={el.id}>
              {el.text}
            </ListItem>
          ))}
        </List>
        <List>
          {answers.map((el, id) => (
            <ListItem className={(classes.item, classes.ulAnswers)} key={id}>
              {el}
            </ListItem>
          ))}
        </List>
      </Chat>
    </>
  );
};

ChatItem.propTypes = {
  messages: PropTypes.array,
};

export default ChatItem;
