import React from "react";
import TitledContainer from '../modules/titled_container';
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_project.css";
import Image from "../modules/Image";
import { merge, wrapDiv, wrapDivRecursive, wrapDivStyled } from "../utils";
import { fadeInExplosiveLatched, fadeInDelayed } from "../modules/defaults/entrance_effect";
import createFootNote from "../footnote";
import TitledMediaText from "../modules/titled_media_text";
import Boarder from "../modules/config/border";

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
  img.setWidth("65%");
  img.setCorner(Boarder.ALL, "15px");

  const preffix = "fig/previous_projects/";
  const filenames = ["proj1.jpg", "proj2.jpg"];
  const link = "#/previous-works/proj";
  const projNames = ["World Wide Tour Guide", "Haato's Birthday Parade"];
  for(var i = 0; i < 2; i++){
    const fig = img.get(preffix+filenames[i]);
    const image = wrapDivRecursive(["thumbnail-container", "button"],projNames[i], fig);
    cols.insert(i, <a href={link+(i+1).toString()}>{fadeInExplosiveLatched.get(image)}</a>);
  }
  
  var titledContainer = new TitledContainer();
  titledContainer.setTitle("Previous Works");
  titledContainer.setFontColor(255, 255, 255,1);
  titledContainer.setTitleColor(205, 92, 92, 1);
  titledContainer.setBodyColor(165, 42, 42,1);
  titledContainer.setRight();
  const title = wrapDivRecursive(["title-container","title"], "Previous Works");
  //return fadeInExplosiveLatched.get(wrapDiv("thumbnail-container", "aaa"));
  return wrapDiv("page-container", fadeInDelayed.get(title), cols.get());
}


export const PreviousWorksProject1= () => {
  return <div>proj1</div>;
};
export const PreviousWorksProject2= () => {
  return <div>proj2</div>;
};