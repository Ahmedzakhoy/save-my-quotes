import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { useHistory } from "react-router-dom";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote(enteredAuthor, enteredText);
    history.push("/quotes");
  }
  const finishedEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you Sure you want to leave? all your entered data will be lost"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              required
              minLength="5"
              type="text"
              id="author"
              ref={authorInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              required
              minLength="5"
              id="text"
              rows="5"
              ref={textInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
