import TimeLine from '../modules/timeline';
import createFootNote from "../footnote";
import { merge, wrapDiv } from '../utils';
import Image from '../modules/Image';
import Border from '../config/border';
import TitledMediaText from '../modules/titled_media_text';
import TitledContainer from '../modules/titled_container';
const About = () => {
  window.scrollTo(0, 0);
  var json = require('../json/timeline.json');
  var timeline = new TimeLine(json);
  return (
    merge(
      createAboutUs(), 
      TimeLine.getTitle("Timeline"), 
      timeline.get(), 
      createFootNote()
    )
  );
};
  
export default About;

function createAboutUs(){
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