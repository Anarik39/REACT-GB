import "./MessageDisplay.scss";

import styled from "styled-components";

const UlAnswers = styled.ul`
  color: red;
`;

const MessageDisplay = ({ messages, answers }) => {
  return (
    <div className="chat">
      <ul>
        {messages.map((el, id) => (
          <li key={id}>{el.text}</li>
        ))}
      </ul>
      <UlAnswers>
        {answers.map((el, id) => (
          <li key={id}>{el}</li>
        ))}
      </UlAnswers>
    </div>
  );
};

export default MessageDisplay;
