import { Fragment, useState, useContext } from "react";
import { QuotesContext } from "../../store/quotes-context";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const [searchTerm, setSearchTerm] = useState(null);
  let quotesData = props.quotes;
  const { removeAll } = useContext(QuotesContext);

  const regex = new RegExp(searchTerm, "i");

  if (searchTerm) {
    quotesData = props.quotes.filter(
      (q) => q.text.match(regex) || q.author.match(regex)
    );
  }
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.search}>
          <label htmlFor="search">Search</label>
          <input
            placeholder="term or author name"
            type="text"
            id="search"
            onChange={searchChangeHandler}
          />
        </div>
        <button className="btn" onClick={removeAll}>
          Reset App
        </button>
      </div>
      <ul className={classes.list}>
        {quotesData.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
