import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Column from "./modules/column";
import * as utils from "./utils";
import Bulletin from "./modules/bulletin";
import Image from "./modules/Image";
import ImageLinked from "./modules/Image_linked";
import Boarder from "./modules/border";
import { aboutArticle } from "./articles";
import Youtube from "./modules/youtube";
import { VideoRelease } from "./modules/bulletin";


function CreatePage(){
    return utils.merge(
        utils.createHeader(), 
        utils.createTopMarginedPageTitle("WWS Haato Fangroup"), 
        createLogoBanner(), 
        createAboutAndBulletinColumns(), 
        utils.createFootNote()
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
    //img.setMargin(Boarder.TOP, "20px");
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

    var bulletin = new Bulletin("550px");
    var video = new VideoRelease();
    video.setDate("23. 06, 2021");
    video.setDescription("Song preview for Grand Birthday Chorus has been released!");
    video.setYoutubeLink("https://youtu.be/EzELsQyLP2s");
    for(var i = 0; i < 10; ++i)
        bulletin.append(video.get());

    cols.insert(0, createAboutColumn());
    cols.insert(1, utils.createSubtitle("Video Release"), bulletin.get());
    cols.insert(2, utils.createSubtitle("Announcement"), bulletin.get());

    return cols.get();
}

function createAboutColumn(){
    var comps = [];
    comps.push(utils.createSubtitle("About"));

    var img = new Image();
    img.setMargin(Boarder.TOP, "20px");
    img.setMargin(Boarder.BOTTOM, "20px");
    img.setWidth("85%");
    img.setCorner(Boarder.ALL, "10px");
    comps.push(img.get("fig/common/haato_pfp.jpg"));

    var cols = new Column(3);
    cols.setMargin(Boarder.TOP, "10px");
    cols.setPadding(Boarder.LEFT, "15%");
    cols.setPadding(Boarder.RIGHT, "15%");
    
    cols.setRatiosEqually();
    cols.setColumnInterval("10px");

    var imgLinked = new ImageLinked();
    var waterMark = new Image();

    waterMark.setWidth("60%");
    imgLinked.setWaterMark(waterMark.get("fig/common/icons/ext_link.jpg"));

    const prefix = "fig/common/icons/";
    const filenames = ["youtube.png", "discord.png", "twitter.png"];

    var links = [];
    links.push("https://youtube.com/channel/UCCC84LkFYu3vJae52LK_5FA");
    links.push("https://discord.gg/HqQ5n2cMBY");
    links.push("https://twitter.com/WWS_Haato");

    for(var i = 0; i < 3; i++)
        cols.insert(i, imgLinked.get(prefix.concat(filenames[i]), links[i]));

    comps.push(cols.get());
    comps.push(getDescription());

    return comps;
}

function getDescription(){
    return (
        <div style = {{textAlign: "justify", color: "crimson", marginTop: "10px"}}>
           {aboutArticle}
        </div>);
}
  



