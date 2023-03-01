import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Nav from "./components/Nav";

// reactstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    {/* Always render the nav at the top level and before App render */}
    <Nav />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
