import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { QuotesContext } from "../../store/quotes-context";

const Comments = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const { getOneQuote } = useContext(QuotesContext);
  const params = useParams();

  const { quoteId } = params;

  const loadedComments = getOneQuote(quoteId).comments;
  let comments;

  const showAddCommentHandler = () => {
    setIsCommenting((prev) => !prev);
  };
  if (loadedComments || loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (!loadedComments || loadedComments.length === 0) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      <button className="btn" onClick={showAddCommentHandler}>
        {isCommenting && "Hide"} Add Comment Form
      </button>

      {isCommenting && <NewCommentForm quoteId={quoteId} />}
      {comments}
    </section>
  );
};

export default Comments;
