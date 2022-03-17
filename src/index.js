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
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";

import * as entEffect from "./modules/defaults/entrance_effect";
import "./css/index.css";

import Slider from "./modules/slider";
import { wrapDiv, wrapDivStyled } from "./utils";
import { fadeInExplosiveDelayed } from "./modules/defaults/entrance_effect";
import TitledMediaText from "./modules/titled_media_text";
import TitledNews from "./modules/titled_news";


const Home = () => {
    return utils.merge(
        createLogoBanner(), 
        createDescription(), 
        createCurrentEvent(), 
        createPreviousWorks(), 
        createNews(), 
        utils.createFootNote()
    );
};

function createNews(){
    var news = new TitledNews(5);
    news.setTitle("News");
    news.setFontColor(255, 255, 255,1);
    news.setTitleColor(205, 92, 92, 1);
    news.setBodyColor(165, 42, 42,1);

    var img = new Image();
    img.setWidth("50%");

    for(var i = 0; i < 200; ++i)
        news.append("text: "+i.toString());

    return news.get();
}
function createCurrentEvent(){
    var slider = new Slider();
    var img = new Image();
    img.setWidth("50%");

    for(var i = 0; i < 3; ++i)
        slider.append(img.get("fig/common/place_holder.png"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Current Event");
    mediaText.setGraphic("Name of the project", slider.get());
    mediaText.setPassage("Haachama Birthday Project 2022", "[descriptions]");

    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setTitleColor(205, 92, 92, 1);
    mediaText.setBodyColor(165, 42, 42,1);
    mediaText.setButton("Join us!", "#current-event");
    mediaText.setLeft();

    return mediaText.get();
}

function createPreviousWorks(){
    var slider = new Slider();
    var youtube = new Youtube();

    youtube.setWidth("85%");
    youtube.setCorner(Boarder.ALL, "10px");

    slider.append(youtube.get("https://youtu.be/aHt-fGy5BYQ"));
    slider.append(youtube.get("https://youtu.be/LLuqBMnfKJY"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Previous Works");
    mediaText.setGraphic("Watch on YouTube", slider.get());
    mediaText.setPassage("Two Projects with 200+ participants in 2021", 
        "In the past year, we have been making great efforts to gather as many \
        fans as we can. We hope to show our largest support for Haachama, \
        and will continue to further make supportive projects in 2022 as well! ");

    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setTitleColor(135,206,235,1);
    mediaText.setBodyColor(65,105,255,1);
    mediaText.setButton("View all", "/#/about");
    mediaText.setRight();

    return mediaText.get();
    
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

    const haatoPfp = img.get("fig/common/haato_pfp.jpg");
    const formattedAbout = wrapDiv("intro_quote", aboutParagraph);
    const formattedWelcome =  wrapDiv("welcome_text", "Hello from the WWS Haato community!");
    const button = fadeInExplosiveDelayed.get(TitledMediaText.createButton(
        "About", "/#/about", {background: "crimson", marginTop: "10%"}));

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
