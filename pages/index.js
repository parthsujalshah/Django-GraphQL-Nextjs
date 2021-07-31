import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.example}>
      {/* <div style={{ color: "red" }}> */}
      Hello
    </div>
  );
};