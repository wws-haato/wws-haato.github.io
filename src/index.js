import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import HeaderApp from "./common/header/App";
import CreateTitledBlock from "./common/create_titled_block";
import CreateHeader from "./common/create_header";
import { CreateTopMarginedPageTitle } from "./common/create_header";
import { CreateLogoBanner } from "./index/App";


function App(){
    var test = CreateTitledBlock("test title 1")
    console.log(require('path').resolve("../fig/common/logo_banner.png"))
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

