import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CreateTitledBlock from "./common/create_titled_block";
import CreateHeader from "./common/create_header";
import { CreateTopMarginedPageTitle } from "./common/create_header";
import { CreateLogoBanner, CreateAboutAndBulletinColumns } from "./index/App";


function App(){
    return (
        <>
            <>{CreateHeader()}</>
            <>{CreateTopMarginedPageTitle("WWS Haato Fangroup")}</>
            <>{CreateLogoBanner()}</>
            <>{CreateAboutAndBulletinColumns()}</>
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

