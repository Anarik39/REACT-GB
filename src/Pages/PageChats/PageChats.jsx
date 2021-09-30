import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatItem from "../../Components/ChatItem/ChatItem";
import ChatForm from "../../Components/ChatForm/ChatForm";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px auto 0;
`;
const Chat = styled.div`
  width: 100%;
`;

const Chats = () => {
  const [messageList, setMessageList] = useState([]);
  const [chats, setChats] = useState([
    { id: 1, name: "egor", messages: [] },
    { id: 2, name: "nikita", messages: [] },
    { id: 3, name: "anar", messages: [] },
    { id: 4, name: "petr", messages: [] },
  ]);

  return (
    <Container>
      <ChatsList chats={chats} setChats={setChats} />
      <Switch>
        <Route exact path="/users/:userName">
          <Chat>
            <ChatForm setFunc={setMessageList} />
            <ChatItem messages={messageList} chats={chats} />
          </Chat>
        </Route>
      </Switch>
    </Container>
  );
};

export default Chats;
