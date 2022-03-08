import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CreateTopMarginedPageTitle, CreateHeader } from "./common/object_creation";
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

