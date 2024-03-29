import React from 'react';
import Column from "../modules/column";
import * as utils from "../utils";
import Image from "../modules/Image";
import ImageLinked from "../modules/Image_linked";
import Boarder from "../config/border";
import Youtube from "../modules/youtube";

import "../css/index.css";

import Slider from "../modules/slider";
import { wrapDiv} from "../utils";
import { fadeInExplosive, fadeInExplosiveDelayed, fadeInExplosiveLatched, fadeInRightwardsLatched, fadeInUpwards, fadeInUpwardsDelayed } from "../modules/defaults/entrance_effect";
import TitledMediaText from "../modules/titled_media_text";
import TitledNews, { NewsContents } from "../modules/titled_news";
import NewsDataBase, { NewsConfig } from "../modules/titled_news";
import TitledContainer from "../modules/titled_container";
import InvertableColumn from "../modules/invertable_columns";
import { fadeInDelayed } from "../modules/defaults/entrance_effect";
import createFootNote from "../footnote";

import { EntranceEffect } from '../modules/entrance_effect';
import articlesHome from '../articles/article_home';
import articlesNews from '../articles/article_news';
import Border from '../config/border';

const Home = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);

    var arrow = new ScrollIndicator();
    const App = utils.merge(
        arrow.get(), 
        createLogoBanner(), 
        createAbout(), 
        createNews(), 
        createCurrentEvent(), 
        createPreviousWorks(), 
        createFootNote("0px")
    );

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
}
  
export default Home;




function createContact(){
    var titledContainer = new TitledContainer();
    titledContainer.setTitle("Contact");
    titledContainer.setFontColor(255, 255, 255,1);
    titledContainer.setTitleColor(229, 49, 76, 1);
    titledContainer.setBodyColor(181, 38, 59, 1);
    titledContainer.setRight();
    
    var cols = new InvertableColumn();
    var img = new ImageLinked();
    var waterMark = new Image();
    waterMark.setWidth("50%");

    img.setWidth("100%");
    img.setWaterMark(waterMark.get("fig/common/icons/ext_link.png"));

    var iconHolder = new Column(3);
    iconHolder.setMargin(Boarder.ALL, "20px");
    

    const preffix = "fig/common/icons/";
    const paths = ["youtube.png", "discord.png", "twitter.png"];
    var links = [];
    links.push("https://www.youtube.com/channel/UCCC84LkFYu3vJae52LK_5FA");
    links.push("https://discord.gg/HqQ5n2cMBY");
    links.push("https://twitter.com/WWS_Haato");
    for(var i = 0; i < 3; i++)
        iconHolder.insert(i, img.get(preffix+paths[i], links[i]));


    //"titled-media-text"
    const passage = fadeInDelayed.get(wrapDiv("passage", 
        "All staffs are available in the Discord server. \
        Please consider Discord as your preferred contact platform"));

    const subtitle = fadeInDelayed.get(wrapDiv("title", "Social Media"));
    const passages = [subtitle, fadeInExplosiveDelayed.get(iconHolder.get()), passage];
    
    cols.insert(1, wrapDiv("titled-media-text", passages));


    var slider = new Slider();
    slider.append(staffInformationLeo);
    slider.append(staffInformationZhadar);
    slider.append(staffInformationSakazuki);
    slider.append(staffInformationAbner);
    slider.append(staffInformationSteve);

    slider.setClickWidth("4VW");
    slider.setBarColor(229, 49, 76, 1);
    slider.setDotColor(255,255,255,1);
    slider.setWidth("95%");

    const leftTitle = fadeInDelayed.get(wrapDiv("title", "Staff Informations"));
    const leftContent = fadeInExplosiveDelayed.get(slider.get());
    cols.insert(0, wrapDiv("titled-media-text", leftTitle), leftContent);

    return titledContainer.get(cols.get());
}

function createNews(){
    var news = new NewsDataBase();
    news.setBodyColor(60, 112, 185, 1); 
    news.setTitleColor(70, 132, 219, 1);
    news.setLeft();

    return news.getHomeTabs();
}


function createCurrentEvent(){
    var img = new Image();
    img.setWidth("85%");
    img.setCorner(Border.ALL, "10px");

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Current Event");

    //TitledMediaText.setPassage has been deprecated
    //please use TitledMediaText.initFromArticle instead
    mediaText.setGraphic(img.get("fig/index/GroupPortrait.png"));
    mediaText.initFromArticle(articlesHome[0]);

    mediaText.setFontColor(255, 255, 255, 1);
    mediaText.setTitleColor(229, 49, 76, 1);
    mediaText.setBodyColor(181, 38, 59, 1);
    //mediaText.setButton("Join us!", "/#/current-event");
    mediaText.setRight();

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
    slider.setBarColor(70, 132, 219, 1);
    slider.setDotColor(255, 255, 255,1);
    slider.setPeriod(3000);

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Previous Works");
    mediaText.initFromArticle(articlesHome[1]);
    mediaText.setGraphic(slider.get());
    
    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setBodyColor(60, 112, 185, 1); 
    mediaText.setTitleColor(70, 132, 219, 1);
    mediaText.setLeft();
    //mediaText.setTitleColor(229, 49, 76, 1);
    //mediaText.setBodyColor(181, 38, 59, 1);
    mediaText.setButton("View all", "/#/previous-works");
    //mediaText.setRight();

    

    return mediaText.get();
  
}


function createAbout(){
    var cols = new Column(2);

    cols.setMargin(Boarder.TOP, "2%");
    cols.setPadding(Boarder.LEFT, "10%");
    cols.setPadding(Boarder.RIGHT, "10%");
    cols.setMargin(Boarder.BOTTOM, "20%");

    cols.setColumnInterval("0px");
    cols.setRatios(35, 65);

    var imgLinked = new ImageLinked();
    imgLinked.setWidth("100%");
    imgLinked.setCorner(Boarder.ALL, "10px");

    var waterMark = new Image();
    waterMark.setWidth("35%");
    const yotubeIcon = waterMark.get("fig/common/icons/youtube.png");
    imgLinked.setWaterMark(utils.merge(yotubeIcon, wrapDiv("haachama-channel-text", "HAACHAMA Ch. Akai Haato")));

    const haatoPfp = imgLinked.get("fig/common/haato_pfp.jpg", 
        "https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg");
    
    let aboutArticle = articlesHome[2];    
    const title = wrapDiv("title", utils.wrapLanguages(aboutArticle.title));
    const passage = wrapDiv("passage", utils.wrapLanguages(aboutArticle.intro));
      
    
    const button = TitledMediaText.createButton("About us", "/#/about", 
        {background: "crimson", marginTop: "10%"});

    cols.insert(0, fadeInExplosiveLatched.get(haatoPfp));
    cols.insert(1, fadeInDelayed.get(passage), fadeInExplosiveLatched.get(button));

    return wrapDiv("intro", fadeInUpwards.get(title),  cols.get());
}



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
        {fadeInExplosive.get(bannerImg)}</div></div>;

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


class ScrollIndicator extends Image{
    static uid = "index-scoll-indicator";
    static duration = 850;
    static keyframes = [
        {transform: 'translateY(-20%)', opacity: 0.65}, 
        {transform: 'translateY(10%)', opacity: 0}
    ];
    static options = {duration: ScrollIndicator.duration, 
        fill:'forwards', easing: 'ease-out'};

    static timer = 0; 
    constructor(){
        super();
        this.setWidth("50%");
        this.item = super.get("fig/index/arrow1.png");
    }

    timerCallBack(){
        var elem = document.getElementById(ScrollIndicator.uid);
        if(!elem)
            return;

        if(utils.isScrolled()){
            clearInterval(ScrollIndicator.timer);
            elem.remove();
        }
        else
            elem.animate(ScrollIndicator.keyframes, ScrollIndicator.options);
    }

    get(){
        var args = {};
        args.className="image-container";
        args.id = ScrollIndicator.uid;
        args.style = ScrollIndicator.keyframes[1];

        ScrollIndicator.timer = setInterval(
                this.timerCallBack.bind(this), ScrollIndicator.duration*1.2);

        return wrapDiv(["scroll-indicator", args], this.item);
    }
}