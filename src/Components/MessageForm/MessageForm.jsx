import { memo, useState } from "react";
import styled from "styled-components";

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

const MessageForm = ({ setFunc }) => {
  const [message, setMessage] = useState("");
  const [idmessage, setIdmessage] = useState(1);

  const submitForm = (event) => {
    event.preventDefault();
    if (message) {
      setFunc((prevState) => [
        ...prevState,
        { id: idmessage, text: message, author: "ya" },
      ]);
      setIdmessage((prevState) => prevState + 1);
      setMessage("");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Мессенджер</h1>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">SEND</Button>
    </form>
  );
};

export default memo(MessageForm);
