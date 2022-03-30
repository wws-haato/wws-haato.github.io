import TitledContainer from "./titled_container";
import { merge, wrapDiv, wrapDivStyled} from "../utils";
import "../css/titled_news.css";
import Slider from "./slider";
import Column from "./column";
import Image from "./Image";
import Border from "../config/border";
import { Mutex } from "async-mutex";
import { fadeInExplosive } from "./defaults/entrance_effect";
import { fadeInRightwards } from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";



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
        var img = MediaNews.imgLoader.get(this.config.imgPath);
        var date = wrapDivStyled("date", {color: fontColor}, this.config.date);
        var title = wrapDivStyled("title", {color: fontColor}, this.config.title);

        if(animate){
            img = fadeInExplosive.get(img);
            date = fadeInRightwards.get(date);
            title = fadeInRightwards.get(title);
        }

        super.insert(0, img);
        super.insert(1, date, title);

        return wrapDiv("titled-news", super.get());
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
                    item = wrapDivStyled("", {opacity:0}, mediaNews.get(fontStyle, slider.items.length==0));
                
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
