import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatItem from "../../Components/ChatItem/ChatItem";
import ChatForm from "../../Components/ChatForm/ChatForm";

const chats = [
  { id: 1, name: "Egor", messages: [] },
  { id: 2, name: "Nikita", messages: [] },
  { id: 3, name: "Anar", messages: [] },
  { id: 4, name: "Petr", messages: [] },
];

const Chats = () => {
  const [messageList, setMessageList] = useState([]);
  return (
    <>
      <ChatsList chats={chats} />
      <Switch>
        <Route exact path="/users/:userId">
          <ChatItem messages={messageList} chats={chats} />
          <ChatForm setFunc={setMessageList} />
        </Route>
      </Switch>
    </>
  );
};

export default Chats;
