import { memo, useEffect, useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "./ChatFormStyled";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const SvgSend = styled.svg`
  width: 50px;
  max-height: 50px;
`;

const ChatForm = ({ setFunc }) => {
  const classes = styles();
  const [message, setMessage] = useState("");
  const [idmessage, setIdmessage] = useState(1);
  const refInput = useRef(null);

  useEffect(() => {
    refInput?.current.focus();
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    refInput.current.focus();
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
    <form onSubmit={submitForm} className={classes.wrapper}>
      <TextField
        inputRef={refInput}
        className={classes.input}
        label="Напишите сообщение..."
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className={classes.btn} type="submit">
        <SvgSend viewBox="0 0 64 64">
          <g>
            <rect height="4" width="21.959" y="21.125" />
            <rect height="4" width="16.016" x="5.943" y="29.454" />
            <rect height="4" width="10.01" x="11.949" y="38.875" />
          </g>
          <g>
            <path d="M63.508,19.53c-0.511-0.748-1.37-1.242-2.339-1.242H30.6c-0.949,0-1.788,0.477-2.303,1.199l17.643,14.711L63.508,19.53z" />
            <path d="M27.769,21.994v20.887c0,1.557,1.274,2.831,2.831,2.831h30.569c1.557,0,2.831-1.274,2.831-2.831V22.069L45.941,37.147   L27.769,21.994z" />
          </g>
        </SvgSend>
      </Button>
    </form>
  );
};

ChatForm.propTypes = {
  setFunc: PropTypes.func,
};

export default memo(ChatForm);
