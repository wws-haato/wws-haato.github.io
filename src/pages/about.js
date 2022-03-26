import TimeLine from '../modules/timeline';
import createFootNote from "../footnote";
import { merge } from '../utils';
import Image from '../modules/Image';
import Boarder from '../modules/config/border';
import TitledMediaText from '../modules/titled_media_text';
import TitledContainer from '../modules/titled_container';
const About = () => {
  window.scrollTo(0, 0);
  var json = require('../json/timeline.json');
  var timeline = new TimeLine(json);
  return (
    merge(
      createPreviousWorks(), 
      TimeLine.getTitle("Timeline"), 
      timeline.get(), 
      createFootNote()
    )
  );
};
  
export default About;

function createPreviousWorks(){
  var img = new Image();

  img.setWidth("65%");
  img.setCircle();

  var mediaText = new TitledMediaText();
  mediaText.setTitle("Previous Works");
  mediaText.setGraphic("WWS Haato", img.get("fig/common/pfp.jpg"));
  mediaText.setPassage("Two Projects with 200+ participants in 2021", 
      "In the past year, we have been making great efforts to gather as many \
      fans as we can. We hope to show our largest support for Haachama, \
      and will continue to further make supportive projects in 2022 as well! ");
  
  mediaText.setFontColor(255, 255, 255,1);
  mediaText.setTitleColor(205, 92, 92, 1);
  mediaText.setBodyColor(165, 42, 42,1);
  //mediaText.setButton("View all", "/#/previous-works");
  mediaText.setRight();

  

  return mediaText.get();

}