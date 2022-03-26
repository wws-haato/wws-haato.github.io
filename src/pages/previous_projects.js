import React from "react";
import TitledContainer from '../modules/titled_container';
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_project.css";
import Image from "../modules/Image";
import { merge, wrapDiv, wrapDivRecursive, wrapDivStyled } from "../utils";
import { fadeInExplosiveLatched } from "../modules/defaults/entrance_effect";
import createFootNote from "../footnote";
import TitledMediaText from "../modules/titled_media_text";

const PreviousWorks= () => {
  window.scrollTo(0, 0);
  return merge(
    createTabs()
  )
};
  
export default PreviousWorks;

function createTabs(){
  var cols = new InvertableColumn();
  var img = new Image();
  img.setWidth("85%");

  const preffix = "fig/common/";
  const filenames = ["place_holder.png", "place_holder.png"];

  for(var i = 0; i < 2; i++){
    const image = wrapDivRecursive(["thumbnail-container", "button"], img.get(preffix+filenames[i]));
    cols.insert(i, fadeInExplosiveLatched.get(image));
  }
  
  var titledContainer = new TitledContainer();
  titledContainer.setTitle("Previous Works");
  titledContainer.setFontColor(255, 255, 255,1);
  titledContainer.setTitleColor(205, 92, 92, 1);
  titledContainer.setBodyColor(165, 42, 42,1);
  titledContainer.setRight();
  //return fadeInExplosiveLatched.get(wrapDiv("thumbnail-container", "aaa"));
  return wrapDiv("page-container",  titledContainer.get(cols.get()));
}


export const PreviousWorksProject1= () => {
  return <div>proj1</div>;
};
export const PreviousWorksProject2= () => {
  return <div>proj2</div>;
};