import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Column from "./modules/column";
import * as utils from "./utils";
import Bulletin from "./modules/bulletin";
import Image from "./modules/Image";
import ImageLinked from "./modules/Image_linked";
import Boarder from "./modules/config/border";
import { aboutArticle, aboutParagraph} from "./articles";
import Youtube from "./modules/youtube";
import { VideoRelease } from "./modules/bulletin";
import { isCellphone } from "./utils";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";

import * as entEffect from "./modules/defaults/entrance_effect";

import InvertableColumn from "./modules/invertable_columns";
import "./css/index.css";
import InformationBlock from "./modules/info_block";
import Slider from "./modules/slider";
import { wrapDiv, wrapDivStyled } from "./utils";
import { fadeInExplosiveDelayed } from "./modules/defaults/entrance_effect";
import TitledContainer from "./modules/titled_container";


const Home = () => {
    return utils.merge(
        createLogoBanner(), 
        createDescription(), 
        createCurrentEvent(), 
        createPreviousWorks(), 
        utils.createFootNote()
    );
};

function createCurrentEvent(){
    var infoBlock = new InformationBlock(true);
    var slider = new Slider();
    var img = new Image();
    img.setWidth("50%");

    for(var i = 0; i < 3; ++i)
        slider.append(img.get("fig/common/place_holder.png"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 
    infoBlock.setTitle("Current Event");
    infoBlock.setGraphic(slider.get());
    infoBlock.setGraphicTitle("Name of the project");
    infoBlock.setSubtitle("Haachama Birthday Project 2022");

    infoBlock.setParagraph("[descriptions]");
    infoBlock.setPadding(Boarder.ALL, "20px");
    infoBlock.setPadding(Boarder.BOTTOM, "30px");
    //infoBlock.setPadding(Boarder.RIGHT, "10px");
    infoBlock.setMargin(Boarder.BOTTOM, "20%");
    //infoBlock.setColour(65,105,255,1);
    infoBlock.setTextColour(0, 0, 255,1);
    infoBlock.setLightColour(205, 92, 92, 1);
    infoBlock.setDarkColour(165, 42, 42,1);
    infoBlock.setButton("Join us!", "/current-event");
    //infoBlock.setBackgroundImage("fig/common/patterns/filmtape.png");

    var titledContainer = new TitledContainer();
    titledContainer.setFontColor(0, 0, 255,1);
    titledContainer.setBodyColor(255, 255, 0,1);
    titledContainer.setTitleColor(165, 42, 42,1);
    titledContainer.setTitle("aaaaaa");
    titledContainer.setRight();
    const a = titledContainer.get(img.get("fig/common/place_holder.png"));
    titledContainer.setLeft();
    const b = titledContainer.get(img.get("fig/common/place_holder.png"));
    

    

    return utils.merge(a, b);
}

function createPreviousWorks(){
    var infoBlock = new InformationBlock(false);
    var slider = new Slider();
    var youtube = new Youtube();

    youtube.setWidth("85%");
    youtube.setCorner(Boarder.ALL, "10px");

    slider.append(youtube.get("https://youtu.be/aHt-fGy5BYQ"));
    slider.append(youtube.get("https://youtu.be/LLuqBMnfKJY"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 
    infoBlock.setTitle("Previous Works");
    infoBlock.setGraphic(slider.get());
    infoBlock.setGraphicTitle("Watch on YouTube");
    infoBlock.setSubtitle("Two Projects with 200+ participants in 2021");
    infoBlock.setParagraph(
        "In the past year, we have been making great efforts to gather as many \
        fans as we can. We hope to show our largest support for Haachama, \
        and will continue to further make supportive projects in 2022 as well! "
    );
    infoBlock.setPadding(Boarder.ALL, "20px");
    infoBlock.setPadding(Boarder.BOTTOM, "30px");
    //infoBlock.setPadding(Boarder.RIGHT, "10px");
    infoBlock.setMargin(Boarder.BOTTOM, "20%");
    //infoBlock.setColour(65,105,255,1);
    infoBlock.setTextColour(255,255,255,1);
    infoBlock.setLightColour(135,206,235,1);
    infoBlock.setDarkColour(65,105,255,1);
    infoBlock.setButton("View all", "/about");
    //infoBlock.setBackgroundImage("fig/common/patterns/filmtape.png");

    

    return infoBlock.getBlock();
}

function createDescription(){
    var cols = new Column(2);

    cols.setMargin(Boarder.TOP, "2%");
    cols.setPadding(Boarder.LEFT, "10%");
    cols.setPadding(Boarder.RIGHT, "10%");
    cols.setMargin(Boarder.BOTTOM, "20%");

    cols.setColumnInterval("0px");
    cols.setRatios(35, 65);

    var img = new Image();
    img.setWidth("100%");
    img.setCorner(Boarder.ALL, "10px");

    //const animatedHaatoPfp = fixedFadeinEntraceEffect.get();
    const haatoPfp = img.get("fig/common/haato_pfp.jpg");
    const formattedAbout = wrapDiv("intro_quote", aboutParagraph);
    const formattedWelcome =  wrapDiv("welcome_text", "Hello from the WWS Haato community!");
    const button = fadeInExplosiveDelayed.get(InformationBlock.createButton(
        "About", "/about", {background: "crimson", marginTop: "10%"}));

    cols.insert(0, entEffect.fadeInExplosiveDelayed.get(haatoPfp));
    cols.insert(1, entEffect.fadeInRightwardsLatched.get(formattedAbout), button);

    return utils.merge(entEffect.fadeInUpwardsDelayed.get(formattedWelcome),  cols.get());

}

function App() {
    const router = (
        <Router>
            <NavbarDropdown />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About/>} />
                </Routes>
        </Router>
    );
    return router;
}

var rootElement = document.getElementById("root");
rootElement.style.overflow = "hidden";

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
        {entEffect.fadeInExplosive.get(bannerImg)}</div></div>;

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
