import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import MessageDisplay from "../MessageDisplay/MessageDisplay";

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

const MessageForm = () => {
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
    <>
      <form onSubmit={submitForm}>
        <Input type="text" onChange={changeMessage} />
        <Button type="submit">SEND</Button>
      </form>
      <MessageDisplay messages={messageList} answers={answers} />
    </>
  );
};

export default memo(MessageForm);
