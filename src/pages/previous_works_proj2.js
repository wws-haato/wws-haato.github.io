import "../css/page_switcher.css";
import "../css/previous_works.css";

import Image from "../modules/Image";
import Youtube from "../modules/youtube";

import Border from "../config/border";
import ProjectTopBanner from "../modules/project_top_banner";
import ProjectDetails from "../modules/project_details";
import createFootNote from "../footnote";
import ImageLinked from "../modules/Image_linked";
import Column from "../modules/column";

import { EntranceEffect } from "../modules/entrance_effect";
import {fadeInExplosive } from "../modules/defaults/entrance_effect";
import {merge, wrapDiv,wrapDivStyled, wrapLanguages, } from "../utils";

import PageSwithcer from "../modules/page_switcher";
import articlesProject1 from "../articles/previous_works_proj1";
import articlesProject2 from "../articles/previous_works_proj2";



const PreviousWorksProject2 = () => {
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

export default PreviousWorksProject2;


function createTopBanner(){
    let topBannerTexts = articlesProject2[0];
    var img = new Image();
    img.setCorner(Border.ALL, "10px");
    var topBanner = new ProjectTopBanner();

    const dir = "fig/previous_works/proj2/";
    topBanner.setGraphic(img.get(dir+"final_cut.gif"));
    topBanner.setSuptitle(topBannerTexts.suptitle);
    topBanner.setTitle(topBannerTexts.title);
    topBanner.setPassage(topBannerTexts.passage);
    return topBanner.get();
}


function createPageSwithcer(){
    var img = new Image();
    img.setWidth("25%");
    img.setCorner(Border.ALL, "2.5px");
    img.setMargin(Border.ALL, "5px");

    var switcher = new PageSwithcer(
        "/#/previous-works/proj1", 
        img.get("fig/previous_works/proj1.jpg"), 
        wrapLanguages(articlesProject1[0].title));

    switcher.setBackground(181, 38, 59, 1);
    return wrapDivStyled("page-switcher", {marginTop: "70px"}, 
        fadeInExplosive.get(switcher.get()));
}


function createVideoDetails(){
    let videoTexts = articlesProject2[1];
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
    let staffTexts = articlesProject2[2];
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