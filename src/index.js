import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CreateTopMarginedPageTitle, CreateHeader } from "./common/utils";
import { CreateLogoBanner, CreateAboutAndBulletinColumns } from "./index/utils";
import { merge } from "./common/utils";


function CreatePage(){
    return merge(
        CreateHeader(), 
        CreateTopMarginedPageTitle("WWS Haato Fangroup"), 
        CreateLogoBanner(), 
        CreateAboutAndBulletinColumns()
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CreatePage />
  </StrictMode>,
  rootElement
);

