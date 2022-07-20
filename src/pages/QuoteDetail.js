import { useParams } from "react-router-dom";
import { useContext } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
// import LoadingSpinner from "../components/UI/LoadingSpinner";
import { QuotesContext } from "../store/quotes-context";

const QuoteDetail = () => {
  const { getOneQuote } = useContext(QuotesContext);
  const params = useParams();
  const { quoteId } = params;

  const quoteData = getOneQuote(quoteId);

  if (!quoteData?.text) {
    return <p>No Quote found!</p>;
  }

  return (
    <section>
      <h1>Quotes Detail Page</h1>
      <HighlightedQuote text={quoteData.text} author={quoteData.author} />

      <Comments />
    </section>
  );
};

export default QuoteDetail;
