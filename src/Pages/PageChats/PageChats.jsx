import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatItem from "../../Components/ChatItem/ChatItem";
import ChatForm from "../../Components/ChatForm/ChatForm";

const Chats = () => {
  const [messageList, setMessageList] = useState([]);
  const [chats, setChats] = useState([
    { id: 1, name: "egor", messages: [] },
    { id: 2, name: "nikita", messages: [] },
    { id: 3, name: "anar", messages: [] },
    { id: 4, name: "petr", messages: [] },
  ]);

  return (
    <>
      <ChatsList chats={chats} setChats={setChats} />
      <Switch>
        <Route exact path="/users/:userName">
          <ChatItem messages={messageList} chats={chats} />
          <ChatForm setFunc={setMessageList} />
        </Route>
      </Switch>
    </>
  );
};

export default Chats;
