import { useState } from "react";
import styled from "styled-components";
import MessageDisplay from "./MessageDisplay/MessageDisplay";
import MessageForm from "./MessageForm/MessageForm";

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <Wrapper>
      <MessageForm setFunc={setMessageList} />
      <MessageDisplay messages={messageList} />
    </Wrapper>
  );
}

export default App;
