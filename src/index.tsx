import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Authenticator } from "aws-amplify-react";

ReactDOM.render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
