import TitledContainer from "./titled_container";

import {fadeInDelayed, fadeInExplosiveDelayed, 
    fadeInLeftwardsLatched, fadeInRightwardsLatched
} from "./defaults/entrance_effect";
import { merge, wrapDiv, wrapDivStyled, wrapDivRecursive} from "../utils";
import "../css/titled_news.css";
import Slider from "./slider";
import Column from "./column";
import Image from "./Image";
import Boarder from "./config/border";
import { Mutex } from "async-mutex";



export class MediaNews extends Column{
    static createImageLoader(){
        var img = new Image();
        img.setWidth("100%");
        img.setCorner(Boarder.ALL, "10px");
        return img;
    }

    static imgLoader = MediaNews.createImageLoader();

    constructor(){
        super(2);
        this.setRatios(30, 70);
        this.config = 0;
        this.setMargin(Boarder.BOTTOM, "10px");
    }


    setConfig(config){
        this.config = config;
    }

    get(fontColor){
        super.insert(0, MediaNews.imgLoader.get(this.config.imgPath));
        
        const title = wrapDivStyled("title", {color: fontColor}, this.config.title);
        const date = wrapDivStyled("date", {color: fontColor}, this.config.date);
        super.insert(1, date, title);

        return wrapDiv("titled-news", super.get());
    }
}

export default class TitledNews extends TitledContainer{
    
    constructor(nDisp){
        super();
        this.nDisp = nDisp;
        this.items = [];
        this.slider = new Slider();
        this.slider.setClickWidth("5VW");
    }

    append(item){
        var mediaNews = new MediaNews();
        mediaNews.setConfig(item);
        this.items.push(mediaNews.get(this.fontColor.get()));
        if(this.items.length == this.nDisp){
            this.slider.append(this.items);
            this.items = new Array();
        }
    }


    get(){
        this.slider.setDotColor(this.fontColor.r, this.fontColor.g, this.fontColor.b, this.fontColor.a);
        this.slider.setBarColor(this.titleColor.r, this.titleColor.g, this.titleColor.b, this.titleColor.a);
        return super.get(this.slider.get());
    }
}

export class NewsConfig{
    static idMutex = new Mutex();
    static uid = 0;

    static getUniqueId(){
        NewsConfig.idMutex.acquire();
        const uid = NewsConfig.uid++;
        NewsConfig.idMutex.runExclusive();
        return "news-config-uid-"+uid.toString();
    }

    constructor(date, title, imgPath, paragraph){
        this.uniqueID = NewsConfig.getUniqueId();
        this.date = date;
        this.title = title;
        this.imgPath = imgPath;
        this.paragraph = paragraph;
    }

}
