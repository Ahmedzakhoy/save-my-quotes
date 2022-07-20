import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuotesContext } from "../../store/quotes-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const QuoteItem = (props) => {
  const { removeQuote } = useContext(QuotesContext);

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <div className={classes.btns}>
        <Link to={`/quotes/${props.id}`} className="btn">
          View Fullscreen
        </Link>
        <button className={"btn"} onClick={removeQuote.bind(this, props.id)}>
          <FontAwesomeIcon icon={faXmark} className={classes.icon} />
          remove quote
        </button>
      </div>
    </li>
  );
};

export default QuoteItem;
