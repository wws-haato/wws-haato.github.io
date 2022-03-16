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
import { indexSlider } from "./modules/slider";


const Home = () => {
    var img = new Image();
    img.setWidth("100%");
    img.setCorner(Boarder.ALL, "10px");

    //const animatedHaatoPfp = fixedFadeinEntraceEffect.get();
    //img.setMargin(Boarder.BOTTOM, "-100px");
    //const float = <div className="info_block_top_banner">Previous Works</div>;
    
    return utils.merge(
        createLogoBanner(), 
        createDescription(), 
        //float,
        createAdvertisement(), 
        utils.createFootNote()
    );
};

function createAdvertisement(){
    var infoBlock = new InformationBlock(false);
    infoBlock.setTitle("Previous Works");
    infoBlock.setGraphic(indexSlider.get());
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
    infoBlock.setColour(65,105,255,1);
    infoBlock.setCorner(Boarder.ALL, "20px");

    

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
    const formattedAbout = <div className="intro_quote"> <q>{aboutParagraph}</q></div>
    const formattedWelcome = <div className="welcome_text">
        Hello from the WWS Haato community!</div>

    cols.insert(0, entEffect.fadeInExplosiveDelayed.get(haatoPfp));
    cols.insert(1, entEffect.fadeInRightwardsLatched.get(formattedAbout));

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
