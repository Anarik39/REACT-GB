import styled from "styled-components";
import { useEffect, useState } from "react";

const UlAnswers = styled.ul`
  color: red;
`;

const Chat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const MessageDisplay = ({ messages }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setAnswers((prevState) => [...prevState, "Хех, Здарова!"]);
      }, 1000);
  }, [messages]);

  return (
    <Chat>
      <ul>
        {messages.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
      <UlAnswers>
        {answers.map((el, id) => (
          <li key={id}>{el}</li>
        ))}
      </UlAnswers>
    </Chat>
  );
};

export default MessageDisplay;
