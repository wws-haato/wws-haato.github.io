import TitledContainer from "./titled_container";

import {fadeInDelayed, fadeInExplosiveDelayed, 
    fadeInLeftwardsLatched, fadeInRightwardsLatched
} from "./defaults/entrance_effect";
import { merge, wrapDiv, wrapDivStyled, wrapDivRecursive} from "../utils";
import "../css/titled_media_text.css";
import Slider from "./slider";


export default class TitledNews extends TitledContainer{
    constructor(nDisp){
        super();
        this.nDisp = nDisp;
        this.items = [];
        this.slider = new Slider();
        this.slider.setClickWidth("7VW");
    }

    append(item){
        this.items.push(item);
        if(this.items.length == this.nDisp){
            this.slider.append(this.items.map(function(x){return <li>{x}</li>;}));
            this.items = new Array();
        }
    }


    get(){
        return super.get(this.slider.get());
    }
}