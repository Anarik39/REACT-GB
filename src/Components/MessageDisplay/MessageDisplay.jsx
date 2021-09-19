import styled from "styled-components";

const UlAnswers = styled.ul`
  color: red;
`;

const Chat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const MessageDisplay = ({ messages, answers }) => {
  return (
    <Chat>
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
    </Chat>
  );
};

export default MessageDisplay;
