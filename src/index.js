import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Column from "./modules/column";
import * as utils from "./utils";
import Bulletin from "./modules/bulletin";
import Image from "./modules/Image";
import ImageLinked from "./modules/Image_linked";
import Boarder from "./modules/border";
import { aboutArticle, aboutParagraph} from "./articles";
import Youtube from "./modules/youtube";
import { VideoRelease } from "./modules/bulletin";
import { isCellphone } from "./utils";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";
import { delayedExplosiveFadeIn300, EntranceEffect } from "./modules/entrance_effect";
import { fadeInRightWardsEntraceEffect } from "./modules/entrance_effect";
import { fixedFadeinEntraceEffect, delayedFadeInRightwards650 } from "./modules/entrance_effect";
import { fadeInUpwards300, explosiveFadeIn } from "./modules/entrance_effect";
import InvertableColumn from "./modules/invertable_columns";
import "./css/index.css";
import InformationBlock from "./modules/info_block";
import Slider from "./modules/slider";


const Home = () => {
    var invCols = new InvertableColumn();
    invCols.insert(0, utils.createFootNote());
    invCols.insert(1, utils.createFootNote());
    invCols.setPadding(Boarder.LEFT, "10%");
    invCols.setPadding(Boarder.RIGHT, "10%");
    const slider = (new Slider()).get();
    console.log(slider);
    return utils.merge(
        createLogoBanner(), 
        createDescription(), 
        createAdvertisement(), 
        createDescription(), 
        createDescription(), 
        slider,
        invCols.get()
    );
};

function createAdvertisement(){
    var infoBlock = new InformationBlock(false);

    var img = new Image();
    img.setWidth("65%");
    img.setCorner(Boarder.ALL, "10px");

    infoBlock.setGraphic(img.get("fig/common/haato_pfp.jpg"));
    infoBlock.setTitle("Concept of World-wide");
    infoBlock.setParagraph("To show full support to Haachama, we always try our best gather fans all over the world. ");
    infoBlock.setPadding(Boarder.LEFT, "10%");
    infoBlock.setPadding(Boarder.RIGHT, "10%");
    return infoBlock.getBlock();
}

function createDescription(){
    var cols = new Column(2);

    cols.setMargin(Boarder.TOP, "2%");
    cols.setPadding(Boarder.LEFT, "10%");
    cols.setPadding(Boarder.RIGHT, "10%");
    cols.setMargin(Boarder.BOTTOM, "60px");

    cols.setColumnInterval("0px");
    cols.setRatios(35, 65);

    var img = new Image();
    img.setWidth("100%");
    img.setCorner(Boarder.ALL, "10px");

    //const animatedHaatoPfp = fixedFadeinEntraceEffect.get();
    const haatoPfp = img.get("fig/common/haato_pfp.jpg");
    const formattedAbout = <div className="intro_quote"> <q>{aboutParagraph}</q></div>
    const formattedWelcome = <div className="welcome_text">
        Hello from the WWS Haato community!</div>

    cols.insert(0, delayedExplosiveFadeIn300.get(haatoPfp));
    cols.insert(1, delayedFadeInRightwards650.get(formattedAbout));

    return utils.merge(fadeInUpwards300.get(formattedWelcome),  cols.get());

}

function App() {
    const router = (
        <Router>
            <NavbarDropdown />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                </Routes>
        </Router>
    );
    return router;
}

function CreatePage(){
    return utils.merge(
        utils.createHeader(), 
        utils.createTopMarginedPageTitle("[Debug Info] width: "+window.innerWidth.toString()), 
        createLogoBanner(), 
        createAboutAndBulletinColumns(), 
        utils.createFootNote()
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);


function createLogoBanner(){
    var img = new Image();
    img.setWidth("100%");
    const bannerImg = img.get("fig/common/logo_banner.png");
    const placeHolder = <div id = "place_holder_banner" 
        className="logo_banner_place_holder " style={{opacity: "0"}}>
        <div id = "place_holder_img_id" className="logo_banner_inner_image">
        {bannerImg}</div>
    </div>;
    const logoBanner = <div id="logo_banner" className="logo_banner">
        <div id = "img" className="logo_banner_inner_image">
        {explosiveFadeIn.get(bannerImg)}</div></div>;

    return utils.merge(placeHolder, logoBanner);
}


document.addEventListener('scroll', function(e){
    var logoBanner = document.getElementById('logo_banner');
    if(!logoBanner)
        return;

    var placeHolder = document.getElementById('place_holder_banner');
    if(!placeHolder || placeHolder.style.opacity=="1")
        return;

    const ratio = 0.5+placeHolder.getBoundingClientRect().top/window.innerHeight;
    logoBanner.style.opacity = ratio>0? ratio.toString(): "0";
    
    var placeHolderImg = document.getElementById('place_holder_img_id');
    if(placeHolderImg && placeHolderImg.getBoundingClientRect().bottom < 0){
        logoBanner.removeChild(logoBanner.childNodes[0]);
        placeHolder.style.opacity="1";
    }
	
})



function createAboutAndBulletinColumns(){
    if(utils.isCellphone()){
        var cols = new Column(2);
        cols.setMargin(Boarder.TOP, "20px");
        cols.setPadding(Boarder.LEFT, "10px");
        cols.setPadding(Boarder.RIGHT, "10px");
        
        cols.setColumnInterval("10px");

        var bulletin = new Bulletin("2000px");
        var video = new VideoRelease();
        video.setDate("23. 06, 2021");
        video.setDescription("Song preview for Grand Birthday Chorus has been released!");
        video.setYoutubeLink("https://youtu.be/EzELsQyLP2s");
        for(var i = 0; i < 5; ++i)
            bulletin.append(video.get());

        cols.insert(0, utils.createSubtitle("Video Release"), bulletin.get());
        cols.insert(1, utils.createSubtitle("Announcement"), bulletin.get());

        return utils.merge(
            <div style = {{width: "65%", margin:"auto"}}>
                {createAboutColumn()}
            </div>, cols.get());
    }
    else{
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
    const fontSize = isCellphone()? "2.4VW": "1.05VW";
    return (
        <div style = {{textAlign: "justify", color: "crimson", marginTop: "10px", fontSize: fontSize}}>
           {aboutArticle}
        </div>);
}
  



