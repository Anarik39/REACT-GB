import { useEffect, useState } from "react";
import styled from "styled-components";
import MessageDisplay from "./MessageDisplay/MessageDisplay";

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

const Input = styled.input`
  width: 300px;
  outline: none;
  height: 20px;
`;
const Button = styled.button`
  width: 50px;
  outline: none;
  height: 26px;
`;

const answerRobot = "Хех, Здарова!";

function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [answers, setAnswers] = useState([]);

  const changeMessage = (event) => {
    const data = {
      text: event.target.value,
      author: "ya",
    };
    setMessage(data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (message) {
      setMessageList((prevState) => [...prevState, message]);
    }
  };

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setAnswers((prevState) => [...prevState, answerRobot]);
      }, 1000);
  }, [messageList]);

  return (
    <Wrapper>
      <form onSubmit={submitForm}>
        <Input type="text" onChange={changeMessage} />
        <Button type="submit">SEND</Button>
      </form>
      <MessageDisplay messages={messageList} answers={answers} />
    </Wrapper>
  );
}

export default App;
