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



const PreviousWorksProject1 = () => {
    window.scrollTo(0, 0);
    return merge(
        createDescription(), 
        createFeatures()
    );

}

export default PreviousWorksProject1;


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