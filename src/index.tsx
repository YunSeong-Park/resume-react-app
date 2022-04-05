/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global, jsx } from "@emotion/react";
import { globalStyle } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
