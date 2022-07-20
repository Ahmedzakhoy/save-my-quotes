import { useRef, useContext } from "react";
import classes from "./NewCommentForm.module.css";
import { QuotesContext } from "../../store/quotes-context";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { addComment } = useContext(QuotesContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    console.log(enteredText);
    addComment(props.quoteId, enteredText);
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          required
          id="comment"
          rows="5"
          ref={commentTextRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
