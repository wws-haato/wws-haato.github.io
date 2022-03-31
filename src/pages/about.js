import createFootNote from "../footnote";
import { merge, wrapLanguages} from '../utils';
import { EntranceEffect } from '../modules/entrance_effect';
import RawParagraph from '../modules/raw_paragraph';
import articlesPreviousWorks from "../articles/article_previous_works";
const About = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    
    //var json = require('../json/timeline.json');
    //var timeline = new TimeLine(json);
    const App = merge(
        createAboutUs(), 
        //TimeLine.getTitle("Timeline"), 
        //timeline.get(), 
        createFootNote()
    );

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
};
  
export default About;


function createAboutUs(){
    var paragraph = new RawParagraph();
    paragraph.setSuptitle("About Us");
    paragraph.setTitle("World Wide Support for Haato");
    paragraph.setPassage(articlesPreviousWorks.map(
        function(x){return wrapLanguages(x)}));
    return paragraph.get();
}