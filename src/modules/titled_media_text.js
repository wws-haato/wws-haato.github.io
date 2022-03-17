import TitledContainer from "./titled_container";
import InvertableColumn from "./invertable_columns";
import {fadeInDelayed, fadeInExplosiveDelayed, 
    fadeInLeftwardsLatched, fadeInRightwardsLatched
} from "./defaults/entrance_effect";
import { merge, wrapDiv, wrapDivStyled, wrapDivRecursive} from "../utils";
import "../css/titled_media_text.css";


export default class TitledMediaText extends TitledContainer{
    /**
    * @param {boolean} reversed true to set fig at 1, otherwise 0
    */
    static createButton(text, link, style){
        style = {className:"button", style:style};
        const button = wrapDivRecursive([{className: "titled-media-text"}, style], text);
        
       return <a href={link}>{button}</a>;
    }

    constructor(isLeft){
        super(isLeft);

        this.cols = new InvertableColumn();

        this.graphic = {content: 0};
        this.passage = {title: "", content: ""};
        
    }

    getGraphID(){
        return this.isLeft? 1:0;
    }

    setGraphic(title, content){
        this.graphic = {title: title, content: content};
    }

    setPassage(title, content){
        this.passage = {title: title, content: content};
    }

    setButton(text, link){
        this.button = {text: text, link: link};
    }


    get(){
        const style = {color: this.fontColor.get()};
        var graphics = [];
        if(this.graphic.title){
            const style = {color: this.fontColor.get()};
            graphics.push(fadeInDelayed.get(wrapDivStyled("title", style, this.graphic.title)));
        }
    
        graphics.push(fadeInExplosiveDelayed.get(this.graphic.content));
        this.cols.insert(this.getGraphID(), wrapDiv("titled-media-text", graphics));
        
        const passage = wrapDiv("titled-media-text", wrapDivStyled("passage", style, this.passage.content));
        const subtitle = wrapDiv("titled-media-text", wrapDivStyled("title", style, this.passage.title));
       
        var passages = [fadeInDelayed.get(subtitle), fadeInExplosiveDelayed.get(passage)];
        if(this.button){
            const style = {color: this.fontColor.get(), background: this.titleColor.get()};
            const anime = this.isLeft? fadeInRightwardsLatched: fadeInLeftwardsLatched;
            passages.push(anime.get(TitledMediaText.createButton(this.button.text, this.button.link, style)));
        }
            
        this.cols.insert(1-this.getGraphID(), passages);

        return super.get(this.cols.get());
        this.TitledContainer.get(this.cols.get());
    }
}