import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
