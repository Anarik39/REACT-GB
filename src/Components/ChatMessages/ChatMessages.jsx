import styled from "styled-components";
import { PropTypes } from "prop-types";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { Redirect, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { botMessageActions } from "../../actions/messagesActions";

const styles = makeStyles({
  item: {
    flexDirection: "column",
    wordWrap: "break-word",
    alignItems: "normal",
  },
  ulAnswers: {
    color: "red",
  },
});

const Chat = styled.div`
  max-width: 600px;
  background: white;
  color: black;
  border-radius: 0 0 10px 10px;
  min-height: 60vh;
  height: 100%;
  margin-left: auto;
`;

const ChatMessages = ({ chats }) => {
  const { userId } = useParams();
  const classes = styles();
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messagesReducer[userId]);

  if (!chats.find((user) => String(user.id) === userId)) {
    return <Redirect to="/chats" />;
  }

  dispatch(botMessageActions(userId, messages));

  return (
    <Chat>
      <List>
        {messages?.map((el, id) => (
          <ListItem
            className={`${
              el.author !== "bot" ? `${classes.item}` : `${classes.item} ${classes.ulAnswers}`
            }`}
            key={id}
          >
            {el.text}
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
