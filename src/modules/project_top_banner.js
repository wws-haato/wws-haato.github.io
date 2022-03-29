import Border from "../config/border";
import "../css/project_top_banner.css";
import { merge, wrapDiv, wrapDivStyled } from "../utils";
import Column from "./column";
import {fadeInDelayed, fadeInExplosiveLatched, 
    fadeInRightwards, fadeInLatched } 
from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";
import Slider from "./slider";


export default class ProjectTopBanner extends InvertableColumn{
    constructor(){
        super();
        this.titledPassages = [];
        this.graphic = 0;
        /*this.setWidth("100%");
        this.setBarColor(165, 42, 42, 1);
        //this.setBarColor(0, 0, 0, 1);
        this.setBackgroundColor(218,165,32,1);
        this.setClickWidth("3VW");
        this.setPadding(Border.ALL, "10px");
        this.setPadding(Border.TOP, "15px");
        this.setCorner(Border.ALL, "20px");
        this.setPeriod(3000);*/
    }
    append(a, b, c){

    }

    /*append(title, img, passage){
        var cols = new Column(2);
        cols.setRatios(35, 65);

        const titleItem = wrapDiv("subtitle", title);
        cols.insert(0, img);
        cols.insert(1, wrapDiv("passage", passage));
        
        super.append(merge(titleItem, cols.get()));
    }*/

    setGraphic(graphic){
        this.graphic = graphic;
    }

    setTitle(title){
        this.title = title;
    }

    setSuptitle(suptitle){
        this.suptitle = suptitle;
    }

    appendTitledPassage(title, passage){
        this.titledPassages.push({title: title, passage: passage});
    }

    get(){
        this.insert(0, fadeInExplosiveLatched.get(this.graphic));
        this.insert(1, this.titledPassages.map(function(x){
            var objs = [];
            if(x.title)
                objs.push(fadeInLatched.get(wrapDiv("desc-title", x.title)));
            if(x.passage)
                objs.push(fadeInExplosiveLatched.get(wrapDiv("description", x.passage)));

            return merge(objs);
        }));

        var objs = [];
        if(this.suptitle)
            objs.push(fadeInRightwards.get(wrapDiv("suptitle", this.suptitle))); 
        if(this.title)
            objs.push(fadeInDelayed.get(wrapDiv("title", this.title))); 
        
        objs.push(super.get());
        return wrapDivStyled("project-top-banner", {marginTop: "10%"}, objs);
    }
}