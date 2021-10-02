import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  wrapper: {
    maxWidth: "600px",
    width: "100%",
    display: "flex",
    marginLeft: "auto",
  },
  input: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: "10px 0 0 0 ",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  btn: {
    background: "linear-gradient(225deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: "0 10px 0 0",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 56,
    padding: "0 30px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      border: "1px solid white",
    },
    "&:hover svg": {
      fill: "white",
    },
  },
});
export default useStyles;
