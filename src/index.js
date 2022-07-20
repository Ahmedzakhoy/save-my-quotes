import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import QuotesContextProvider from "./store/quotes-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuotesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuotesContextProvider>
);
