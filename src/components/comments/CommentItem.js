import classes from "./CommentItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { QuotesContext } from "../../store/quotes-context";

const CommentItem = (props) => {
  const params = useParams();
  const { quoteId } = params;

  const { removeComment } = useContext(QuotesContext);

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button
        className={classes.btn}
        onClick={removeComment.bind(this, quoteId, props.id)}
      >
        <FontAwesomeIcon icon={faXmark} className={classes.icon} />
      </button>
    </li>
  );
};

export default CommentItem;
