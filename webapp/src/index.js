import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import store from "./redux/store";
import App from "./App";
import "./normalize.scss";

addLocaleData([...en, ...es]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
