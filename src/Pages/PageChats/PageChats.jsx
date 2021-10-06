import { Route, Switch } from "react-router-dom";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatMessages from "../../Components/ChatMessages/ChatMessages";
import SendMessageForm from "../../Components/SendMessageForm/SendMessageForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px auto 0;
`;
const Chat = styled.div`
  width: 100%;
`;

const Chats = () => {
  const chats = useSelector((state) => state.chatsReducer.chats);

  return (
    <Container>
      <ChatsList chats={chats} />
      <Switch>
        <Route exact path="/chats/:userId">
          <Chat>
            <SendMessageForm />
            <ChatMessages chats={chats} />
          </Chat>
        </Route>
      </Switch>
    </Container>
  );
};

export default Chats;
