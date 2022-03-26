import "../css/titled_container.css";
import ColourRGBA from "./config/colour_rgba";
import { merge, wrapDivRecursive, wrapDiv} from "../utils";
import { fadeInLeftwards, fadeInRightwards } from "./defaults/entrance_effect";

export default class TitledContainer{
    /**
    * @param {boolean} reversed true to set fig at 1, otherwise 0
    */
    
    constructor(){
        this.title = "";
        this.isLeft = true;
        this.fontColor = new ColourRGBA(255,255,255,1);
        this.bodyColor = new ColourRGBA(65,105,255,1); 
        this.titleColor = new ColourRGBA(135,206,235,1);
    }


    setFontColor(r, g, b, a){
        this.fontColor = new ColourRGBA(r, g, b, a);
    }
    setBodyColor(r, g, b, a){
        this.bodyColor = new ColourRGBA(r, g, b, a);
    }
    setTitleColor(r, g, b, a){
        this.titleColor = new ColourRGBA(r, g, b, a);
    }

    setLeft(){
        this.isLeft = true;
    }
    setRight(){
        this.isLeft = false;
    }
    setTitle(title){
        this.title = title;
    }

    get(item){
        const suffix = this.isLeft?"left": "right";
        if(this.title){
            var shadow = new ColourRGBA(0,0,0,0.5);
            shadow = this.bodyColor.divide(2).add(shadow);

            var titleStyle = {color: this.fontColor.get()};
            titleStyle.background = this.titleColor.get();
            titleStyle.boxShadow = "2.5px 2.5px 5px "+shadow.get();
        }
        const titlestyle = {color: this.fontColor.get(), 
            boxShadow: "2.5px 2.5px 5px "+shadow.get(), 
            background: this.titleColor.get()};
        
        const title = wrapDivRecursive([{className: "title"}, {className: suffix, style: titlestyle}], this.title);

        const bodystyle = {background: this.bodyColor.get()};
        const body = wrapDivRecursive([{className: "body-container"}, {className: suffix, style: bodystyle}], item);
        const anime = this.isLeft? fadeInLeftwards: fadeInRightwards;

        return wrapDiv("titled-container", anime.get(title), body);
    }

}