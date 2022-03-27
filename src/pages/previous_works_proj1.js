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
    details.setSuptitle("Video");
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
    details.emplace(ProjectDetails.SINGLE);

    var youtube = new Youtube();
    youtube.setWidth("65%");
    youtube.setCorner(Border.ALL, "10px");
    details.append("Watch on Youtube", youtube.get("https://youtu.be/LLuqBMnfKJY"));

    return details.get();
}


function createDescription(){
    var youtube = new Youtube();

    youtube.setWidth("85%");
    youtube.setCorner(Border.ALL, "10px");


    var mediaText = new TitledMediaText();
    mediaText.setTitle("World Wide Tour Guide");
    mediaText.setGraphic("Final Video", youtube.get("https://youtu.be/LLuqBMnfKJY"));
    mediaText.setPassage("Haachama Supportive Project", 
        "This project features spot photos all around the world. \
        Participant joins as the local tour guide to show Haachama around their hometown. ",
        "We PhotoShoped Haachama and haaton with participant's \
        name written on the wooden board onto the photos.", 
    );
    
    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setTitleColor(135,206,235, 1);
    mediaText.setBodyColor(65,105,255,1);
    mediaText.setLeft();

    return wrapDiv({style: {marginTop: "20%"}}, mediaText.get());
}

function createFeatures(){
    var slider = new Slider();
    var youtube = new Youtube();

    youtube.setWidth("85%");
    youtube.setCorner(Border.ALL, "10px");

    slider.append(youtube.get("https://youtu.be/aHt-fGy5BYQ"));
    slider.append(youtube.get("https://youtu.be/LLuqBMnfKJY"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 
    slider.setBarColor(205,92,92,1);
    slider.setDotColor(255,255,255,1);

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Features");
    mediaText.setGraphic("Watch on YouTube", slider.get());
    mediaText.setPassage("Two Projects with 200+ participants in 2021", 
        "In the past year, we have been making great efforts to gather as many \
        fans as we can. We hope to show our largest support for Haachama, \
        and will continue to further make supportive projects in 2022 as well! ");
    
    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setTitleColor(205, 92, 92, 1);
    mediaText.setBodyColor(165, 42, 42,1);
    mediaText.setButton("View all", "/#/previous-works");
    mediaText.setRight();

    

    return mediaText.get();
}