import React from "react";
import TitledContainer from '../modules/titled_container';
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_works.css";
import Image from "../modules/Image";
import { merge, wrapDiv, wrapDivRecursive, wrapDivStyled } from "../utils";
import { fadeInExplosiveLatched, fadeInDelayed } from "../modules/defaults/entrance_effect";
import createFootNote from "../footnote";
import TitledMediaText from "../modules/titled_media_text";
import Boarder from "../modules/config/border";
import { wrapLink } from "../utils";

const PreviousWorks= () => {
    //window.scrollTo(0, 0);
    return merge(
        createTabs()
    )
};
  
export default PreviousWorks;

function createTabs(){
  var cols = new InvertableColumn();
  var img = new Image();
  img.setWidth("65%");
  img.setCorner(Boarder.ALL, "15px");

  const preffix = "fig/previous_works/";
  const filenames = ["proj1.jpg", "proj2.jpg"];
  const link = "#/previous-works/proj";
  const projNames = ["World Wide Tour Guide", "Haato's Birthday Parade"];
  for(var i = 0; i < 2; i++){
    const fig = img.get(preffix+filenames[i]);
    const image = wrapDiv(["thumbnail-container", "button"], projNames[i], fig);
    cols.insert(i, wrapLink(link+(i+1).toString(), image));
  }
  
  const title = wrapDivRecursive(["title-container","title"], "Previous Works");
  return wrapDiv("page-container", title, cols.get());
}


export const PreviousWorksProject2= () => {
  return <div>proj2</div>;
};



//banner stuff

function createBannerProject(projID){
  var img = new Image();

  img.setWidth("50%");
  img.setCircle();

  var mediaText = new TitledMediaText();
  mediaText.setTitle("About Us");
  mediaText.setGraphic("", img.get("fig/common/pfp.jpg"));
  mediaText.setPassage("World Wide Support for Haato", 
      "World Wide Support for Haato, aka WWS Haato, \
      is a non-profit project team mainly focusing on Haato projects that \
      gather fans around the world. Our team has been set up since March, 2021, \
      when Haato started her long break. ", 

      "We have so far produced our first project \"World Wide Tour Guide\" \
      and second project \"Haato's Birthday Parade\" \
      will be continuing to make more supportive projects for Haachama in the future."
  );
  
  mediaText.setFontColor(255, 255, 255,1);
  mediaText.setTitleColor(205, 92, 92, 1);
  mediaText.setBodyColor(165, 42, 42,1);
  mediaText.setRight();

  

  return wrapDiv({style: {marginTop: "20%"}}, mediaText.get());

}