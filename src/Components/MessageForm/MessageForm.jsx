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

  const submitForm = (event) => {
    event.preventDefault();
    if (message) {
      setFunc((prevState) => [
        ...prevState,
        {
          text: message,
          author: "ya",
          status: false,
        },
      ]);
      setMessage("");
    }
  };

  return (
    <form onSubmit={submitForm}>
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
