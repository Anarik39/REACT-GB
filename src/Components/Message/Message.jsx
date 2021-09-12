import "./Message.scss";

const Message = ({ text }) => {
  return (
    <header className="app-header">
      <div>{text}</div>
    </header>
  );
};

export default Message;
