import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CreateTitledBlock from "./common/create_titled_block";
import CreateHeader from "./common/create_header";
import { CreateTopMarginedPageTitle } from "./common/create_header";
import { CreateLogoBanner } from "./index/App";


function App(){
    var test = CreateTitledBlock("test title 1")
    return (
        <>
            <>{CreateHeader()}</>
            <>{CreateTopMarginedPageTitle("WWS Haato Fangroup")}</>
            <>{CreateLogoBanner()}</>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

