import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.example}>
        Index
      </div>
    </div>
  );
};