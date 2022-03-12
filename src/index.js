import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Column from "./modules/column";
import { CreateSubtitle, CreateHeader, 
    CreateTopMarginedPageTitle, merge} from "./utils";
import { Bulletin } from "./modules/bulletin";
import Image from "./modules/Image";
import { Edge } from "./modules/config";
import Boarder from "./modules/border";


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


function CreateLogoBanner() {
    var img = new Image();
    img.setMargin(Edge.TOP, "20px");
    img.setWidth("65%");

    return img.get("fig/common/logo_banner.png");
}


function CreateAboutAndBulletinColumns(){
    var cols = new Column(3);
    cols.setMargin(Boarder.TOP, "20px");
    cols.setPadding(Boarder.LEFT, "20px");
    cols.setPadding(Boarder.RIGHT, "20px");
    
    cols.setRatios(25, 40, 40);
    cols.setColumnInterval("20px");

    var bulletin = new Bulletin("500px");
    for(var i = 0; i < 100; ++i)
        bulletin.append(i.toString());

    cols.insert(0, CreateAboutColumn());
    cols.insert(1, CreateSubtitle("Video Release"), bulletin.get());
    cols.insert(2, CreateSubtitle("Announcement"), bulletin.get());

    return cols.get();
}

function CreateAboutColumn(){
    var components = [];
    components.push(CreateSubtitle("About"));
    var img = new Image();
    img.setWidth("75%");
    img.setCircle();

    components.push(img.get("fig/common/pfp.jpg"));
    

    return components;
}
  



