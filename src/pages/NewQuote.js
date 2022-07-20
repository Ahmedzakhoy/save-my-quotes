import { useContext } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { QuotesContext } from "../store/quotes-context";
const NewQuote = () => {
  const { addQuote } = useContext(QuotesContext);

  return (
    <section>
      <h1>New Quotes Page</h1>
      <QuoteForm onAddQuote={addQuote} />
    </section>
  );
};

export default NewQuote;
