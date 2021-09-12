import Message from "./Components/Message/Message";

function App() {
  const textMessage = "Хех, здарова!";
  return (
    <div>
      <Message text={textMessage} />
    </div>
  );
}

export default App;
