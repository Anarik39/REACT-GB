import { useState } from "react";
import styled from "styled-components";
import ChatItem from "./ChatItem/ChatItem";
import ChatForm from "./ChatForm/ChatForm";
import ChatsList from "./ChatsList/ChatsList";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 270px 1fr;
`;
const Header = styled.header`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`;

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <>
      <Header>МЕССЕНДЖЕР</Header>
      <Wrapper>
        <ChatsList />
        <ChatItem messages={messageList} />
      </Wrapper>
      <ChatForm setFunc={setMessageList} />
    </>
  );
}

export default App;
