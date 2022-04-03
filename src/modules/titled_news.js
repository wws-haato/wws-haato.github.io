import TitledContainer from "./titled_container";
import { merge, wrapDiv, wrapDivStyled, wrapStyle, wrapLanguages} from "../utils";
import "../css/titled_news.css";
import "../css/news_page.css";
import Slider from "./slider";
import Column from "./column";
import Image from "./Image";
import Border from "../config/border";
import { Mutex } from "async-mutex";
import { fadeInExplosive } from "./defaults/entrance_effect";
import { fadeInRightwards } from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";
import Youtube from "./youtube";
import { NavLink } from "react-router-dom";
import articlesNews from "../articles/article_news";

var pageSlider = new Slider(); 

class NewsContent extends Column{
    constructor(article){
        super(2);
        this.setRatiosEqually();

        this.date = article.date;
        this.graphic = article.graphic;
        this.comparableId = createComparableId(this.date);
        this.title = article.title;
        this.passage = article.passage;
    }

    getGraphic(){
        if(!this.graphicCreated){
            this.graphicCreated = true;
            const isYoutube = this.graphic.type == "youtube";

            var loader = isYoutube? new Youtube(): new Image();
            loader.setCorner(Border.ALL, "10px");

            this.graphic = loader.get(this.graphic.path);
            if(!isYoutube)
                this.graphic = wrapStyle({aspectRatio: "16 / 9", overflow:"hidden"}, this.graphic);
            
        }
        return this.graphic;
    }

    getTitle(){
        return  wrapDiv("title", wrapLanguages(this.title));
    }

    getPassage(){
        return wrapDiv("passage", this.passage.map(
            function(line){return wrapDiv("line", wrapLanguages(line));}));
    }

    getDate(){
        return wrapDiv("date", createSwitchableDate(this.date));
    }

    get(aid, animate){
        var date = this.getDate();
        var title = this.getTitle();
        var graphic = this.getGraphic();

        if(animate){
            graphic = fadeInExplosive.get(graphic);
            date = fadeInRightwards.get(date);
            title = fadeInRightwards.get(title);
        }

        this.insert(0, graphic);
        var navLink = <NavLink to="/news" activeStyle>{
            wrapDiv("titled-news", date, title)}</NavLink>

        this.insert(1, <div onClick={this.onclick.bind(this, aid)}>{navLink}</div>);
        return super.get();
    }

    onclick(aid){
        pageSlider.setActiveId(aid);
    }

}


export default class NewsDataBase extends TitledContainer{
    static allNews = articlesNews.map(function(article){
        return new NewsContent(article);}

    ).sort(function(a, b) {return b.comparableId-a.comparableId;});
    
    constructor(){
        super();
        while(NewsDataBase.allNews.length%4)
            NewsDataBase.allNews.push(false);

        pageSlider.resize(articlesNews.length);
        this.setTitle("News");
    }

    getHomeTabs(){
        var slider = new Slider();
        var cols = new InvertableColumn();
        var cells = [0, 0, 0, 0];
        for(var i = 0; i < NewsDataBase.allNews.length; i++){
            let news = NewsDataBase.allNews[i];
            cells[i%4] = news? news.get(i, slider.empty()): 
                wrapStyle({width:"100%", aspectRatio: "32 / 9"}, "");
            if((i+1)%4===0){
                cols.insert(0, cells[0], cells[1]);
                cols.insert(1, cells[2], cells[3]);
                slider.append(cols.get());
            }
        }

        slider.setClickWidth("5VW");
        slider.dotColor = this.fontColor;
        slider.barColor = this.titleColor;

        return super.get(slider.get());
    }
    
    getPageTabs(){
        for(var i = 0; i < articlesNews.length; i++){
            let news = NewsDataBase.allNews[i];
            const graphic = wrapStyle(
                {width: "50%", marginLeft: "25%"}, news.getGraphic());
            const config = merge(news.getDate(), 
                news.getTitle(), graphic, news.getPassage()); 

            pageSlider.insert(i, config);
        }
        return wrapDiv("news-page", pageSlider.get());
    }

}

const monthAbbrs = ["Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function createSwitchableDate(date){
    var obj = {};
    obj.en = date.day.toString()+"th "+
        monthAbbrs[date.month-1]+". "+date.year.toString();
    obj.jp = date.year.toString()+"年"+
        date.month.toString()+"月"+date.day.toString()+"日";

    return wrapLanguages(obj);
}

function createComparableId(date){
    return (date.year*13+date.month)*32+date.day;
}

