import "../css/slider.css";
import Image from "./Image";
import { getRawNumberAndSuffix } from "../utils";

export default class Slider{
    static imgPath = "fig/common/icons/slider_click.webp";
    constructor(){
        this.items = [];
        this.imgWidth = "10px";
        this.width = "100%"
    }

    append(item){
        this.items.push(item);
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
        return <div id = {"slider_click_"+isLeftwards.toString()} style={{marginTop: marginTop}}>
            {img.get(Slider.imgPath)}
        </div>
    }

    get(){
        return(
            <div style={{width: "100%", height: "200px"}}>
            <div className="slideshow_container" style={{width: this.width}}>
                <div className="slider_botton_container" style={{width: this.imgWidth, marginLeft: "0"}}>{this.getSliderClick(true)}</div>
                <div className="slider_botton_container_right" style={{width: this.imgWidth, marginRight: "0"}}>{this.getSliderClick(false)}</div>
            </div></div>
        );
    }
}
