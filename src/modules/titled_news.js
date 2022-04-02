import TitledContainer from "./titled_container";
import { merge, wrapDiv, wrapDivStyled, wrapStyle, wrapLanguages} from "../utils";
import "../css/titled_news.css";
import Slider from "./slider";
import Column from "./column";
import Image from "./Image";
import Border from "../config/border";
import { Mutex } from "async-mutex";
import { fadeInExplosive } from "./defaults/entrance_effect";
import { fadeInRightwards } from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";
import UniqueIDGenerator from "./unique_id_generator";
import Youtube from "./youtube";
import articlesNews from "../articles/article_news";
import { ThemeConsumer } from "styled-components";



export class MediaNews extends Column{
    static createImageLoader(){
        var img = new Image();
        img.setWidth("100%");
        img.setMargin(Border.TOP, "10px")
        img.setCorner(Border.ALL, "10px");
        return img;
    }

    static imgLoader = MediaNews.createImageLoader();

    constructor(){
        super(2);
        this.setRatiosEqually();
        this.config = 0;
        //this.setMargin(Boarder.LEFT, "5%");
    }


    setConfig(config){
        this.config = config;
    }

    get(fontColor, animate){
        var graphic = this.config.graphic;
        var date = wrapDivStyled("date", {color: fontColor}, this.config.date);
        var title = wrapDivStyled("title", {color: fontColor}, this.config.title);

        if(animate){
            graphic = fadeInExplosive.get(graphic);
            date = fadeInRightwards.get(date);
            title = fadeInRightwards.get(title);
        }

        super.insert(0, graphic);
        super.insert(1,  wrapDiv("titled-news", date, title));

        return super.get();
    }
}

export default class TitledNews extends TitledContainer{
    
    constructor(nDisp){
        super();
        this.nDisp = nDisp;
        this.items = [];
    }

    append(item){
        if(!this.items.length%this.nDisp)
            this.items.push(new Array());

        this.items[this.items.length-1].push(item);
    }


    get(){
        const fontStyle = this.fontColor.get();
        
        var slider = new Slider();
        var mediaNews = new MediaNews();
        var invCols = new InvertableColumn();

        var elems = [];
        var colId = 0;
        while(this.items[this.items.length-1].length%this.nDisp)
            this.items[this.items.length-1].push(0);
            
        for(let items of this.items){
            for(let item of items){
                if(item){
                    mediaNews.setConfig(item);
                    item = mediaNews.get(fontStyle, slider.items.length==0);
                }
                else
                    item = wrapStyle({opacity:0}, mediaNews.get(fontStyle, slider.items.length==0));
                
                elems.push(item);
                if(elems.length < this.nDisp/2)
                    continue;

                invCols.insert(colId, elems);
                if(colId)
                    slider.append(invCols.get());

                elems = [];
                colId = 1-colId;
            }
        }
        slider.setClickWidth("5VW");
        slider.setDotColor(this.fontColor.r, this.fontColor.g, this.fontColor.b, this.fontColor.a);
        slider.setBarColor(this.titleColor.r, this.titleColor.g, this.titleColor.b, this.titleColor.a);
        return super.get(slider.get());
    }
}

export class NewsConfig{
    static uidGen = new UniqueIDGenerator("news-config-uid");

    constructor(date, title, graphic){
        this.uniqueID = NewsConfig.uidGen.generateUniqueID();
        this.date = date;
        this.title = title;
        this.graphic = graphic;
    }

}


export class NewsContents{
    static uidGen = new UniqueIDGenerator("news-contents-uid");
    static monthAbbrs = ["Jan", "Feb", "Mar", "Apr", 
        "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    static decodeDate(date){
        const en = date.day.toString()+"th "+
            NewsContents.monthAbbrs[date.month-1]+". "+date.year.toString();
        const jp = date.year.toString()+"年"+
            date.month.toString()+"月"+date.day.toString()+"日";

        return wrapLanguages({en:en, jp:jp});
    }

    static encodeDate(date){
        return (date.year*13+date.month)*32+date.day;
    }

    static allNews = articlesNews.map(function(x){
        return new NewsContents(x);}).sort(
            function(a, b) {return b.encode - a.encode;});

    static generateHomeTabs(nDisps){
        var news = new TitledNews(nDisps);
        news.setTitle("News");
        news.setFontColor(255, 255, 255, 1);
        news.setTitleColor(70, 132, 219, 1);
        news.setBodyColor(60, 112, 185, 1);

        for(let content of NewsContents.allNews)
            news.append(new NewsConfig(content.getDate(), 
                content.getTitle(), content.getGraphic()));
        
        
        return news.get();
    }

    /**
	* initialize from articles/article_news.js
	*/
    constructor(article){
        this.article = article;
        this.encode = NewsContents.encodeDate(article.date);
        this.uid = NewsContents.uidGen.generateUniqueID();
    }
    getGraphic(){
        if (!this.graphic){
            var loader = this.article.graphic.type == "youtube"?
                new Youtube(): new Image();

            loader.setCorner(Border.ALL, "10px");
            this.graphic = loader.get(this.article.graphic.path);
            if(this.article.graphic.type != "youtube"){
                this.graphic = wrapStyle({aspectRatio: "16 / 9", overflow:"hidden"}, this.graphic);
            }
        }
        return this.graphic;
    }

    getTitle(){
        if (!this.title)
            this.title = wrapLanguages(this.article.title);
        
        return this.title;
    }

    getPassage(){
        if(!this.passage)
            this.passage = wrapDiv("passage", this.article.passage.map(
                function(line){return wrapDiv("line", wrapLanguages(line));}));
        
        return this.passage; 
    }

    getDate(){
        return NewsContents.decodeDate(this.article.date);
    }

}
