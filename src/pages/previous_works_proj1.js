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



const PreviousWorksProject1 = () => {
    window.scrollTo(0, 0);
    return merge(
        createTopBanner(), 
        createDetails()
        //createDescription(), 
        //createFeatures()
    );

}

export default PreviousWorksProject1;


function createTopBanner(){
    var img = new Image();
    var topBanner = new ProjectTopBanner();

    const imgPathPreffix = "fig/previous_works/proj1/";
    topBanner.append("Supportive Messages", 
        img.get(imgPathPreffix+"supportive_msgs.png"), 
        "We collected messages from people in order to show \
        support to Haachama while on her leave. \
        Over 200 of supportive messages are received at the end of the project! "
    );
    topBanner.append("Spot Photos", 
        img.get(imgPathPreffix+"camera.png"), 
        "More then 300 photos taken from 46 countries have been received. \
        Hope Haachama would enjoy the trip as well!"
    );

    topBanner.setSuptitle("WWS Haato Project 1");
    topBanner.setTitle("World Wide Tour Guide");
    topBanner.appendTitledPassage("03. 03, 2021", 
        "Haachama went on her journey of self-discovery");
    topBanner.appendTitledPassage("09. 03, 2021", 
        "WWS Haato teamed up to support Haato while on her break");
    return topBanner.get();
}


function createDetails(){
    var img = new Image();
    img.setWidth("50%");

    const dir = "fig/previous_works/proj1/";
    var details = new ProjectDetails();

    //news.setFontColor(255, 255, 255,1);
    //news.setTitleColor(135,206,235,1);

    details.setContourColor(0,102,204, 0.4);
    //details.setContentColor(135,206,235, 0.6);
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