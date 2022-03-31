import React from "react";
import TitledContainer from '../modules/titled_container';
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_works.css";
import Image from "../modules/Image";
import Youtube from "../modules/youtube";
import { displayAnimationQueries, merge, wrapDiv, wrapDivRecursive, wrapDivStyled, wrapLanguages } from "../utils";
import { fadeInExplosiveLatched, fadeInDelayed, fadeInExplosive } from "../modules/defaults/entrance_effect";
import TitledMediaText from "../modules/titled_media_text";
import Border from "../config/border";
import Slider from "../modules/slider";
import ProjectTopBanner from "../modules/project_top_banner";
import ProjectDetails from "../modules/project_details";
import createFootNote from "../footnote";
import ColourRGBA from "../config/colour_rgba";
import ImageLinked from "../modules/Image_linked";
import Column from "../modules/column";
import { EntranceEffect } from "../modules/entrance_effect";
import PageSwithcer from "../modules/page_switcher";
import "../css/page_switcher.css";

import articlesCurrentEvent from "../articles/current_event";
import LanguageSwitch from "../modules/language_switch";



const CurrentEvent = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    const App = merge(
        createTopBanner(), 
        createVideoDetails(), 
        createStaffDetails(), 
        createPageSwithcer(), 
        wrapDiv({style:{marginTop:"70px"}}, createFootNote())

    );
    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
}

export default CurrentEvent;


function createTopBanner(){
    let topBannerTexts = articlesCurrentEvent[0];
    var img = new Image();
    img.setCorner(Border.ALL, "10px");
    var topBanner = new ProjectTopBanner();

    const dir = "fig/previous_works/proj2/";
    topBanner.setGraphic(img.get(dir+"final_cut.gif"));
    topBanner.setSuptitle(topBannerTexts.suptitle);
    topBanner.setTitle(topBannerTexts.title);
    topBanner.setPassage(topBannerTexts.passage);
    //topBanner.appendTitledPassage("Haachama Birthday Project 2021", "");
    //topBanner.appendTitledPassage("", "Original Song");
    //topBanner.appendTitledPassage("", "Original MV");
    //topBanner.appendTitledPassage("", "Over 100 Singing Haatons");
    return topBanner.get();
}


function createPageSwithcer(){
    var img = new Image();
    img.setWidth("25%");
    img.setCorner(Border.ALL, "15px");
    img.setMargin(Border.ALL, "5px");

    var switcher = new PageSwithcer(
        "/#/previous-works/proj1", 
        img.get("fig/previous_works/proj1.jpg"), 
        "►See World Wide Tour Guide");

    switcher.setBackground(181, 38, 59, 1);
    return wrapDivStyled("page-switcher", {marginTop: "70px"}, 
        fadeInExplosive.get(switcher.get()));
}


function createVideoDetails(){
    let videoTexts = articlesCurrentEvent[1];
    var details = new ProjectDetails();

    details.setContourColor(255, 255, 255, 0.2);
    details.setSuptitle(videoTexts.suptitle);
    details.setBackgroundImage("fig/background/video.jpg");

    var youtube = new Youtube();
    youtube.setWidth("65%");
    youtube.setCorner(Border.ALL, "10px");

    details.setGraphic(1, youtube.get("https://youtu.be/aHt-fGy5BYQ"));
    for(let content of videoTexts.contents){
        details.emplace(content.length);
        for(let cell of content)
            details.appendCell(cell);

    }
    
    return details.get();
}


function createStaffGraphic(imgPath, ...snsList){
    var img = new Image();
    img.setCircle();
    img.setWidth("25%");
    img.setMargin(Border.ALL, "10px");
    const pfp = img.get(imgPath);

    var cols = new Column(snsList.length);
    cols.setRatiosEqually();

    const margin = (100-30*snsList.length)/2;
    cols.setMargin(Border.LEFT, margin.toString()+"%");
    cols.setMargin(Border.RIGHT, margin.toString()+"%");
    cols.setColumnInterval("5px");
    
    img = new Image();
    img.setWidth("50%");
    var snsIcon = new ImageLinked();
    snsIcon.setWaterMark(img.get("fig/common/icons/ext_link.png"));

    var colID = 0;
    for(let sns of snsList)
        cols.insert(colID++, snsIcon.get(sns.path, sns.link));
    
    return merge(pfp, wrapDiv({style:{width:"35%", margin: "5px auto"}}, cols.get()));
}

function createStaffDetails(){
    var details = new ProjectDetails();
    let staffTexts = articlesCurrentEvent[2];
    details.setContourColor(255,20,147,0.6);
    details.setSuptitle(staffTexts.suptitle);
    details.setBackgroundImage("fig/background/heart.webp");

    const dir = "fig/common/icons/";
    details.setGraphic(1, createStaffGraphic("fig/pfp/leo.jpg", 
        {path:dir+"twitter.png", link:"https://twitter.com/LeoHsieh57"}
    ));
    details.setGraphic(2, createStaffGraphic("fig/pfp/zhadar.jpg", 
        {path:dir+"twitter.png", link:"https://twitter.com/HaatonZhadi"}, 
        {path:dir+"reddit.png", link:"https://www.reddit.com/user/HaatonZhadi"}
    ));
    details.setGraphic(3, createStaffGraphic("fig/pfp/saka.png", 
        {path:dir+"twitter.png", link:"https://twitter.com/henry4204aaa"}, 
    ));
    details.setGraphic(4, createStaffGraphic("fig/pfp/abner.jpg", 
        {path:dir+"twitter.png", link:"https://twitter.com/UltimateAbrod"}, 
        {path:dir+"youtube.png", link:"https://www.youtube.com/channel/UCmX9DnmswDnujsDXWnMyOhw"}
    ));
    details.setGraphic(5, createStaffGraphic("fig/pfp/steve.jpg", 
        {path:dir+"twitter.png", link:"https://twitter.com/le_hoang_dung"}, 
        {path:dir+"reddit.png", link:"https://www.reddit.com/user/HoangDung007"}    
    ));

    for(let content of staffTexts.contents){
        details.emplace(content.length);
        for(let cell of content)
            details.appendCell(cell);

    }
    
    return details.get();
}



function createDetailsBackup(){
    var img = new Image();
    img.setWidth("50%");

    const dir = "fig/previous_works/proj1/";
    var details = new ProjectDetails();
    details.setContourColor(181, 38, 59, 0.8);
    details.setContentColor(245, 245, 220, 0.6);
    details.setSuptitle("Video");
    details.setBackgroundImage("fig/background/3c.jpg");
    details.emplace(ProjectDetails.SINGLE);

    var youtube = new Youtube();
    youtube.setWidth("65%");
    youtube.setCorner(Border.ALL, "10px");
    details.append("Watch on Youtube", youtube.get("https://youtu.be/LLuqBMnfKJY"));

    details.emplace(ProjectDetails.DUAL);
    details.append("Description", img.get(dir+"desc_img.png"),
        "This project features spot photos all around the world.", 
        "Participant joins as the local tour guide to show Haachama around their hometown.", 
        "We PhotoShoped Haachama and haaton with participant's name \
         written on the wooden board onto the photos."
    );
    details.append("Concept of World Wide", img.get(dir+"earth.png"), 
        "We wanted to emphasize the word \"World-Wide.\"", 
        "We clustered photos continent-wise to show that Haachama's fanbase uniformly distributes \
        over the world, featuring some supportive messages from the corresponding continents.", 
        "The strongest idol deserves our world wide support!"
    );
    

    return details.get();
}