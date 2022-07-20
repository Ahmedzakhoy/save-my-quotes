import { useContext } from "react";
import QuoteList from "../components/quotes/QuoteList";
import { QuotesContext } from "../store/quotes-context";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const { quotesData } = useContext(QuotesContext);

  if (!quotesData || quotesData.length === 0) {
    return <NoQuotesFound />;
  }

  return (
    <section>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={quotesData} />
    </section>
  );
};

export default AllQuotes;
