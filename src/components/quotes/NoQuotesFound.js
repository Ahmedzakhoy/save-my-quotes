import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";
import { useContext } from "react";
import { QuotesContext } from "../../store/quotes-context";
const NoQuotesFound = () => {
  const { removeAll } = useContext(QuotesContext);
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <div className={classes.btns}>
        <Link to="/new-quote" className="btn">
          Add a Quote
        </Link>
        <button className="btn" onClick={removeAll}>
          Reset App
        </button>
      </div>
    </div>
  );
};

export default NoQuotesFound;
