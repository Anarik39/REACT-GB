import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 200,
  },
});

const ChatsList = () => {
  const classes = useStyles();
  const [chats, setChats] = useState([
    { id: 1, name: "Egor" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Anar" },
    { id: 4, name: "Petr" },
  ]);
  return (
    <div className={classes.root}>
      <List>
        {chats.map((el) => (
          <ListItem button key={el.id}>
            <ListItemText primary={el.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatsList;
