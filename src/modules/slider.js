import "../css/slider.css";
import Image from "./Image";
import { getRawNumberAndSuffix } from "../utils";
import { Mutex } from "async-mutex";
import Boarder from "./border";

export default class Slider{
    static idMutex = new Mutex();
    static uid = 0;
    static imgPath = "fig/common/icons/slider_click.webp";

    static getUniqueId(){
        Slider.idMutex.acquire();
        const uid = Slider.uid++;
        Slider.idMutex.runExclusive();
        return "slider-uid-"+uid.toString();
    }

    constructor(){
        this.imgWidth = "10px";
        this.width = "100%";
        this.items = [];
        this.leftwardsId = Slider.getUniqueId();
        this.rightwardsId = Slider.getUniqueId();
        this.activeId = 0;
    }

    append(item){
        this.items.push({uid: Slider.getUniqueId(), item:item});
    }

    setWidth(width){
        this.width = width;
    }

    setClickWidth(width){
        this.imgWidth=width;
    }

    getSliderClick(isLeftwards){
        var img = new Image();
        img.setWidth(this.imgWidth);
        img.setFlip(isLeftwards);

        var imgWidth = getRawNumberAndSuffix(this.imgWidth);
        imgWidth.val/=2;
        const shift = imgWidth.val.toString()+imgWidth.suffix;
        
        const marginTop = "calc(50% - "+shift+")";
        console.log(marginTop);
        return <div id = {isLeftwards? this.leftwardsId: this.rightwardsId} style={{marginTop: marginTop}} 
            onClick={isLeftwards? this.leftwardsCallBack.bind(this): this.rightwardsCallBack.bind(this)}>
                {img.get(Slider.imgPath)} </div>;
    }

    leftwardsCallBack(){
        var nextActiveId = this.activeId-1;

        if(nextActiveId < 0)
            nextActiveId+=this.items.length;
        
        let currUid = this.items[this.activeId].uid;
        let nextUid = this.items[nextActiveId].uid;
        let currElem = document.getElementById(currUid);
        let nextElem = document.getElementById(nextUid);
        if(!currElem || !nextElem)
            return;
        
        this.activeId=nextActiveId;
        const tmp = currElem.style.display;
        currElem.style.display = nextElem.style.display;
        nextElem.style.display = tmp;

    }


    rightwardsCallBack(){
        var nextActiveId = this.activeId+1;
        if(nextActiveId == this.items.length)
            nextActiveId=0;

        let currUid = this.items[this.activeId].uid;
        let nextUid = this.items[nextActiveId].uid;
        let currElem = document.getElementById(currUid);
        let nextElem = document.getElementById(nextUid);
        if(!currElem || !nextElem)
            return;
        
        this.activeId = nextActiveId;
        const tmp = currElem.style.display;
        currElem.style.display = nextElem.style.display;
        nextElem.style.display = tmp;
    }

    get(){
        var img = new Image();
        img.setWidth("50%");
        return(
            <div style={{width: "100%", height: "100%"}}>
            <div className="slideshow_container" style={{width: this.width}}>
                {this.items.map(function(x, i){
                    return (<div id={x.uid} className="slider_sides" 
                    style={{display: i? "none": "block"}}> {x.item}</div>);})}

                <div className="slider_botton_container" style={{width: this.imgWidth}}>{this.getSliderClick(true)}</div>
                <div className="slider_botton_container_right" style={{width: this.imgWidth}}>{this.getSliderClick(false)}</div>
            </div></div>
        );
    }
}

export var indexSlider = createIndexSlider();

function createIndexSlider(){
    var slider = new Slider();
    var img = new Image();
    img.setWidth("50%");
    img.setCorner(Boarder.ALL, "10px");

    slider.append(img.get("fig/common/icons/github.png"));
    slider.append(img.get("fig/common/icons/twitter.png"));
    slider.append(img.get("fig/common/icons/discord.png"));

    slider.setClickWidth("5VW");
    slider.setWidth("65%"); 

    return slider;
}
