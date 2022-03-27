import "../css/slider.css";
import Image from "./Image";
import { getRawNumberAndSuffix, scrolledIntoView, wrapDivStyled} from "../utils";
import { Mutex } from "async-mutex";
import ColourRGBA from "../config/colour_rgba";


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

    static timers = [];

    static fadeIn = {
        keyframes: [{opacity: 0}, {opacity: 1}], 
        options:  {duration: 500, fill: 'forwards', easing: 'ease-out'}
    };
    static fadeOut = {
        keyframes: [{opacity: 1}, {opacity: 0}], 
        options:  {duration: 500, fill: 'forwards', easing: 'ease-out'}
    };
    constructor(){
        this.imgWidth = "10px";
        this.width = "100%";
        this.items = [];
        this.activeId = 0;
        this.barColor = new ColourRGBA(0, 0, 255, 1);
        this.dotColor = new ColourRGBA(255, 255, 255, 1);
        this.period = -1;
        this.lastAnimatedTime = -1;
        this.uid = Slider.getUniqueId();
    }

    append(item){
        this.items.push({uid: Slider.getUniqueId(), item:item});
    }

    setPeriod(period){
        this.period = period;
    }

    setWidth(width){
        this.width = width;
    }

    setBackgroundColor(r,g,b,a){
        this.backgroundColor = new ColourRGBA(r, g, b, a);
    }

    setBarColor(r, g, b, a){
        this.barColor = new ColourRGBA(r, g, b, a);
    }

    setDotColor(r, g, b, a){
        this.dotColor = new ColourRGBA(r, g, b, a);
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

    createDotBar(){
        const dot = this.dotColor.get();
        const bar = this.barColor.get();
        var dots = [];
        for(var i = 0; i < this.items.length; ++i)
            dots.push(<span id ={this.items[i].uid+"-dot"} className="dot" style={
                {color: dot, background: dot, opacity: i? "0.5": "1"}}
                onClick={this.callBackJump.bind(this, i)}></span>);
        
        return wrapDivStyled("dot-bar", {color: bar, background: bar}, dots);
    }

    callBackTimer(){
		var elem = document.getElementById(this.uid);
        const now = Date.now();
		if(!elem || !scrolledIntoView(elem))
			return; 

        if(this.lastAnimatedTime < 0){
            //never been animated
            this.lastAnimatedTime = now
            return;
        }

        if(now-this.lastAnimatedTime < this.period)
            return;

        this.lastAnimatedTime = now;
        this.callBack(1);
    }


    callBackJump(id){
        let currUid = this.items[this.activeId].uid;
        let nextUid = this.items[id].uid;
        let currElem = document.getElementById(currUid);
        let nextElem = document.getElementById(nextUid);
        if(!currElem || !nextElem)
            return;
        
        this.activeId=id;

        var tmp = currElem.style.display;
        currElem.style.display = nextElem.style.display;
        nextElem.style.display = tmp;

        nextElem.animate(Slider.fadeIn.keyframes, Slider.fadeIn.options);
        currElem.animate(Slider.fadeOut.keyframes, Slider.fadeOut.options);
        let currDot = document.getElementById(currUid+"-dot");
        let nextDot = document.getElementById(nextUid+"-dot");
        if(!currDot || !nextDot)
            return;

        tmp = currDot.style.opacity;
        currDot.style.opacity = nextDot.style.opacity;
        nextDot.style.opacity = tmp;
    }

    callBack(inc){
        var nextActiveId = this.activeId+inc;
        while(nextActiveId < 0)
            nextActiveId+=this.items.length;

        while(nextActiveId >= this.items.length)
            nextActiveId-=this.items.length;

        this.callBackJump(nextActiveId);
    }


    get(){
        if(this.period > 0)
            Slider.timers.push(setInterval(this.callBackTimer.bind(this), 1));
        
        return(
            <div style={{width: "100%", height: "100%", position: "static"}}>
            <div id={this.uid} className="slideshow_container" style={{width: this.width}}>
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
                {this.createDotBar()}
            </div></div>
        );
    }
}
