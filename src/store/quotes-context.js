import React, { useState, useEffect } from "react";

export const QuotesContext = React.createContext({
  quotesData: [],
  addQuote: (author, text) => {},
  removeQuote: (id) => {},
  removeAll: () => {},
  getSingleQuote: (id) => {},
  addComment: (id, comment) => {},
  removeComment: (quoteId, commentId) => {},
});

//

const defaultData = [
  {
    author: "Albert Einstein",
    text: "weak people revenge, strong people forgive, intelligent people ignore.",
    id: "1658227028328",
    comments: [],
  },
  {
    author: "confucius",
    text: "A seed grows with no sound but a tree falls with huge noise. Destruction has noise, but creation is quiet. This is the power of silence. Grow silently.",
    id: "1658227266211",
    comments: [],
  },
  {
    author: "Prophet Muhammad (PBUH)",
    text: "Feed the hungry, Visit the sick, Set free captives.",
    id: "1658230164118",
    comments: [],
  },
];
//

//

const QuotesContextProvider = (props) => {
  const [allQuotes, setAllQuotes] = useState(defaultData);

  useEffect(() => {
    const storageData = localStorage.getItem("quotesData");
    if (storageData) {
      console.log(JSON.parse(storageData));
      setAllQuotes(JSON.parse(storageData));
    }
  }, []);

  const addComment = (id, comment) => {
    let quote = allQuotes.find((q) => q.id === id);
    setAllQuotes((previous) => {
      const remainingQuotes = previous.filter((q) => q.id !== quote.id);
      return [
        {
          ...quote,
          comments: [
            ...quote.comments,
            { text: comment, id: new Date().getTime().toString() },
          ],
        },
        ...remainingQuotes,
      ];
    });
  };
  const addQuote = (author, text) => {
    setAllQuotes((previous) => {
      return [
        {
          author: author,
          text: text,
          id: new Date().getTime().toString(),
          comments: [],
        },
        ...previous,
      ];
    });
  };
  const removeQuote = (id) => {
    setAllQuotes((previous) => {
      return previous.filter((quote) => quote.id !== id);
    });
  };
  const removeAll = () => {
    const confirm = window.confirm(
      "Are You Sure? the website will return to its default state"
    );
    if (confirm) {
      setAllQuotes(defaultData);
    }
  };
  const removeComment = (quoteId, commentId) => {
    setAllQuotes((previous) => {
      const remainingQuotes = previous.filter((q) => q.id !== quoteId);
      const quote = getSingleQuote(quoteId);
      const remainingComments = quote.comments.filter(
        (comment) => comment.id !== commentId
      );
      return [
        {
          ...quote,
          comments: [...remainingComments],
        },
        ...remainingQuotes,
      ];
    });
  };
  function getSingleQuote(id) {
    return allQuotes.find((q) => q.id === id);
  }

  useEffect(() => {
    localStorage.setItem("quotesData", JSON.stringify(allQuotes));
  }, [allQuotes]);

  return (
    <QuotesContext.Provider
      value={{
        quotesData: allQuotes,
        addQuote: addQuote,
        removeQuote: removeQuote,
        removeAll: removeAll,
        getOneQuote: getSingleQuote,
        addComment: addComment,
        removeComment: removeComment,
      }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
