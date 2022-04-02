import createFootNote from "../footnote";
import { merge, wrapDiv, wrapLanguages} from '../utils';
import { EntranceEffect } from '../modules/entrance_effect';
import RawParagraph from '../modules/raw_paragraph';
import articlesAbout from "../articles/article_about";
import SliderPage from "../modules/slider_page";
import TitledNews, { NewsContents } from "../modules/titled_news";

const News = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    console.log("reload!!!");
    
    const App = merge(
        wrapDiv("raw-paragraph", NewsContents.generatePageTabs()) 
    );

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
};
  
export default News;



