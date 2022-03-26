import TimeLine from '../modules/timeline';
import createFootNote from "../footnote";
import { merge } from '../utils';

const About = () => {
  window.scrollTo(0, 0);
  var json = require('../json/timeline.json');
  var timeline = new TimeLine(json);
  return (
    merge(
      timeline.get(), 
      createFootNote()
    )
  );
};
  
export default About;