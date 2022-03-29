import React from "react";
import InvertableColumn from "../modules/invertable_columns";
import "../css/previous_works.css";
import Image from "../modules/Image";
import { merge, wrapDiv, wrapDivRecursive, wrapDivStyled } from "../utils";
import { fadeInExplosiveLatched, fadeInDelayed } from "../modules/defaults/entrance_effect";
import TitledMediaText from "../modules/titled_media_text";
import Border from "../config/border";
import { wrapLink } from "../utils";

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
  img.setCorner(Border.ALL, "15px");

  const preffix = "fig/previous_works/";
  const filenames = ["proj1.jpg", "proj2.jpg"];
  const link = "#/previous-works/proj";
  const projNames = ["World Wide Tour Guide", "Haato's Birthday Parade ❤"];
  for(var i = 0; i < 2; i++){
    const fig = img.get(preffix+filenames[i]);
    const image = wrapDiv(["thumbnail-container", "button"], projNames[i], fig);
    cols.insert(i, wrapLink(link+(i+1).toString(), image));
  }
  
  const title = wrapDivRecursive(["title-container","title"], "Previous Works");
  return wrapDiv("page-container", title, cols.get());
}
