import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 200,
    position: "fixed",
    top: "30%",
    left: "400px",
  },
});

const ChatsList = ({ chats }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {chats.map((el) => (
          <ListItem button key={el.id}>
            <Link to={`/users/${el.id}`}>{el.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatsList;
