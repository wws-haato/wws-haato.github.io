import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import HeaderApp from "./common/header/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HeaderApp />
  </StrictMode>,
  rootElement
);

