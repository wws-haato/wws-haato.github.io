import createFootNote from "../footnote";
import { merge, wrapDiv, wrapLanguages} from '../utils';
import { EntranceEffect } from '../modules/entrance_effect';


import NewsDataBase from "../modules/titled_news";


const News = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    console.log("reload!!!");
    const App = news.getPageTabs();
    

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
};
  
export default News;
var news = new NewsDataBase();



