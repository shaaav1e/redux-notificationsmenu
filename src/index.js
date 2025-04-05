import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

// Force a simple test value into localStorage to verify it's working
localStorage.setItem(
  "redux-test-key",
  "This is a test value to check localStorage"
);

// Check if we can read from localStorage
console.log("Test localStorage read:", localStorage.getItem("redux-test-key"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
