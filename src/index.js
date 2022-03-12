import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Column from "./modules/column";
import * as utils from "./utils";
import Bulletin from "./modules/bulletin";
import Image from "./modules/Image";
import ImageLinked from "./modules/Image_linked";
import Boarder from "./modules/border";


function CreatePage(){
    return utils.merge(
        utils.createHeader(), 
        utils.createTopMarginedPageTitle("WWS Haato Fangroup"), 
        createLogoBanner(), 
        createAboutAndBulletinColumns()
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CreatePage/>
  </StrictMode>,
  rootElement
);


function createLogoBanner() {
    var img = new Image();
    img.setMargin(Boarder.TOP, "20px");
    img.setWidth("65%");

    return img.get("fig/common/logo_banner.png");
}


function createAboutAndBulletinColumns(){
    var cols = new Column(3);
    cols.setMargin(Boarder.TOP, "20px");
    cols.setPadding(Boarder.LEFT, "10px");
    cols.setPadding(Boarder.RIGHT, "10px");
    
    cols.setRatios(25, 40, 40);
    cols.setColumnInterval("10px");

    var bulletin = new Bulletin("500px");
    for(var i = 0; i < 100; ++i)
        bulletin.append(i.toString());

    cols.insert(0, createAboutColumn());
    cols.insert(1, utils.createSubtitle("Video Release"), bulletin.get());
    cols.insert(2, utils.createSubtitle("Announcement"), bulletin.get());

    return cols.get();
}

function createAboutColumn(){
    var comps = [];
    comps.push(utils.createSubtitle("About"));

    var img = new Image();
    img.setWidth("75%");
    img.setCircle();
    comps.push(img.get("fig/common/pfp.jpg"));

    var cols = new Column(3);
    cols.setMargin(Boarder.TOP, "10px");
    cols.setPadding(Boarder.LEFT, "15%");
    cols.setPadding(Boarder.RIGHT, "15%");
    
    cols.setRatiosEqually();
    cols.setColumnInterval("10px");

    var imgLinked = new ImageLinked();
    imgLinked.setWidth("100%");
    imgLinked.setCorner(Boarder.ALL, "0");

    var waterMark = new Image();
    waterMark.setWidth("60%");
    imgLinked.setWaterMark(waterMark.get("fig/common/icons/ext_link.jpg"));
    const prefix = "fig/common/icons/";
    const filenames = ["youtube.png", "discord.png", "twitter.png"];
    const links = ["https://www.youtube.com/channel/UCCC84LkFYu3vJae52LK_5FA", 
        "https://discord.gg/HqQ5n2cMBY", "https://twitter.com/WWS_Haato"];
    for(var i = 0; i < 3; i++)
        cols.insert(i, imgLinked.get(prefix.concat(filenames[i]), links[i]));

    comps.push(cols.get());
    

    return comps;
}
  



