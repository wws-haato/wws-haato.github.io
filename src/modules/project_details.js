import Border from "../config/border";
import "../css/previous_works.css";
import { merge, wrapDiv, wrapDivStyled } from "../utils";
import Column from "./column";
import {fadeInDelayed, fadeInExplosiveLatched, 
    fadeInRightwards, fadeInLatched } 
from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";
import Slider from "./slider";
import "../css/project_details.css";


export default class ProjectDetails{
    static DUAL = 2;
    static SINGLE = 1;
    static imgPath = "url(fig/background/red_chessboard.png)";
    constructor(){
        this.items = [];
        this.blockDualities = [];
    }

    emplace(type){
        this.blockDualities.push(type);
    }

    append(title, graphic, ... passages){
        var obj = {};
        if(title)
            obj.title = title;
        if(passages.length)
            obj.passages = passages;
        if(graphic)
            obj.graphic = graphic;

        this.items.push(obj);
    }


    get(){
        var i = 0;
        var items = [];
        var cols = new InvertableColumn();
        const classNames = ["left-block", "right-block"];
        for(let duality of this.blockDualities){
            var mergedObjs = [];
            for(var iend = i+duality; i < iend; i++){
                var objs = [];
                const item = this.items[i];
                if(item.title)
                    objs.push(wrapDiv("title", item.title));
                if(item.passages)
                    objs.push(item.passages.map(function(x){
                        return wrapDiv("passage", x);}));
                       
                if(item.graphic)
                    objs.push(item.graphic);

                mergedObjs.push(merge(objs));
            }
            if(duality==ProjectDetails.SINGLE)
                items.push(wrapDiv("single-block", mergedObjs[0]));
            else{
                for(var j = 0; j < 2; ++j)
                    cols.insert(j, wrapDiv(classNames[j], mergedObjs[j]));

                items.push(cols.get());
            }

        }

        return wrapDivStyled("project-details", {backgroundImage: ProjectDetails.imgPath}, items);
    }


}