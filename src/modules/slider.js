import "../css/slider.css";
import Image from "./Image";
import { getRawNumberAndSuffix} from "../utils";
import { Mutex } from "async-mutex";
import Boarder from "./config/border";
import Youtube from "./youtube";

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

        return <div style={{marginTop: marginTop}}  onClick={
            this.callBack.bind(this, isLeftwards? -1:1)}>{img.get(Slider.imgPath)} </div>;
    }

    callBack(inc){
        console.log(inc);
        var nextActiveId = this.activeId+inc;
        while(nextActiveId < 0)
            nextActiveId+=this.items.length;

        while(nextActiveId >= this.items.length)
            nextActiveId-=this.items.length;

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

    get(){
        return(
            <div style={{width: "100%", height: "100%", position: "static"}}>
            <div className="slideshow_container" style={{width: this.width}}>
                {this.items.map(
                    function(x, i){
                        return (
                            <div id={x.uid} className="slider_sides" 
                            style={{display: i? "none": "block", margin: "auto"}}> {
                                <div style={{width: "100%", margin: "auto"}}>
                                {x.item}</div>
                            }
                            </div>
                        );
                    }
                )}
                <div className="slider_botton_container" style={
                    {width: this.imgWidth}}>{this.getSliderClick(true)}</div>
                <div className="slider_botton_container_right" style={
                    {width: this.imgWidth}}>{this.getSliderClick(false)}</div>
            </div></div>
        );
    }
}

export var indexSlider = createIndexSlider();

function createIndexSlider(){
    var slider = new Slider();
    var youtube = new Youtube();

    youtube.setWidth("85%");
    youtube.setCorner(Boarder.ALL, "10px");


    slider.append(youtube.get("https://youtu.be/aHt-fGy5BYQ"));
    slider.append(youtube.get("https://youtu.be/LLuqBMnfKJY"));
    //slider.append(youtube.get("fig/common/icons/discord.png"));

    slider.setClickWidth("4VW");
    slider.setWidth("100%"); 

    return slider;
}
