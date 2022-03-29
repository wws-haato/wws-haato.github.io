import React from "react";
import TitledContainer from '../modules/titled_container';
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_works.css";
import Image from "../modules/Image";
import Youtube from "../modules/youtube";
import { merge, wrapDiv, wrapDivRecursive, wrapDivStyled } from "../utils";
import { fadeInExplosiveLatched, fadeInDelayed } from "../modules/defaults/entrance_effect";
import TitledMediaText from "../modules/titled_media_text";
import Border from "../config/border";
import Slider from "../modules/slider";
import ProjectTopBanner from "../modules/project_top_banner";
import ProjectDetails from "../modules/project_details";
import createFootNote from "../footnote";
import ColourRGBA from "../config/colour_rgba";
import ImageLinked from "../modules/Image_linked";
import Column from "../modules/column";



const PreviousWorksProject1 = () => {
    window.scrollTo(0, 0);
    return merge(
        createTopBanner(), 
        createVideoDetails(), 
        createWebsiteDetails(), 
        wrapDiv({style:{marginTop:"70px"}}, createFootNote())
        
        //createDescription(), 
        //createFeatures()
    );

}

export default PreviousWorksProject1;


function createSlide(title, imgPath, passage){
    var img = new Image();
    var cols = new Column(2);
    cols.setRatios(35, 65);

    const titleItem = wrapDiv("subtitle", title);
    cols.insert(0, img.get(imgPath));
    cols.insert(1, wrapDiv("passage", passage));
        
    return merge(titleItem, cols.get());
}

function createTopBanner(){
    var img = new Image();
    var topBanner = new ProjectTopBanner();
    var slider = new Slider();

    slider.setWidth("100%");
    slider.setBarColor(165, 42, 42, 1);
    slider.setBackgroundColor(218,165,32,1);
    slider.setClickWidth("3VW");
    slider.setPadding(Border.ALL, "10px");
    slider.setPadding(Border.TOP, "15px");
    slider.setCorner(Border.ALL, "20px");
    slider.setPeriod(3000);

    const dir = "fig/previous_works/proj1/";
    slider.append(createSlide("Supportive Messages", dir+"supportive_msgs.png", 
        "We collected messages from people in order to show \
        support to Haachama while on her leave. \
        Over 200 of supportive messages are received at the end of the project! ")
    );
    slider.append(createSlide("Spot Photos", dir+"camera.png", 
        "More then 300 photos taken from 46 countries have been received. \
        Hope Haachama would enjoy the trip as well!")
    );
    
    topBanner.setGraphic(slider.get());
    topBanner.setSuptitle("WWS Haato Project 1");
    topBanner.setTitle("World Wide Tour Guide");
    topBanner.appendTitledPassage("03. 03, 2021", 
        "Haachama went on her journey of self-discovery");
    topBanner.appendTitledPassage("09. 03, 2021", 
        "WWS Haato teamed up to support Haato while on her break");
    return topBanner.get();
}


function createVideoDetails(){
    var img = new Image();
    img.setWidth("50%");

    const dir = "fig/previous_works/proj1/";
    var details = new ProjectDetails();

    details.setContourColor(0, 102, 204, 0.6);
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
        "Participants joined as the local tour guide to show Haachama around their hometown.", 
        "We added Haachama and Haaton with the participant's name \
        onto the photos and alligned them thematically."
    );
    details.append("Concept of World Wide", img.get(dir+"earth.png"), 
        "We wanted to emphasize the word \"World-Wide.\"", 
        "We clustered photos continent-wise to show that Haachama's fanbase uniformly distributes \
        over the world, featuring some supportive messages from the corresponding continents.", 
        "The strongest idol deserves our world wide support!"
    );
    

    return details.get();
}


function createWebsiteDetails(){
    var details = new ProjectDetails();

    //details.setContourColor(35,93,58, 0.4);
    details.setContourColor(23, 81, 185, 0.8);
    details.setSuptitle("Website");
    details.setBackgroundImage("fig/background/web.jpg");
    
    details.emplace(ProjectDetails.DUAL);
    details.append("Description",  TitledMediaText.createButton(
        "Visit website", "https://haatotabi.tk/home", 
        {background: "crimson", marginTop: "10%", marginBottom: "7%"}),
        "This part of the project is done by MASS and make sure to check out their latest project!", 
        "We present the supportive messages on the website"
    );

    var img = new ImageLinked();
    var waterMark = new Image();
    waterMark.setWidth("50%");

    img.setWidth("25%");
    img.setWaterMark(waterMark.get("fig/common/icons/ext_link.png"));
    details.append("MASS", img.get("fig/common/icons/mass.png", 
        "https://twitter.com/ManoSquad"), 
        "Manotomo Alliance Support Squad, aka MASS, \
        is a community focused on supporting Hololivers from around the globe.", 
    );
    

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