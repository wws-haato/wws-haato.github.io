import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import HeaderApp from "./common/header/App";
import CreateTitledBlock from "./common/create_titled_block";
import CreateHeader from "./common/create_header";


function App(){
    return (
        <>
            <>{CreateHeader()}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
            <>{CreateTitledBlock("test title 1")}</>
            <>{CreateTitledBlock("test title 2")}</>
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

