import "../css/image.css";
import { Config, EdgeType } from "./config";

export default class Image extends Config{
    constructor(){
        super();
        //this.width = "0%";
        //this.marginTop = "0px";
        this.cornerRadius = "0px";

    }

    SetWidth(width){
        this.width = width;
    }


    SetMarginTop(marginTop){
        this.setMargin(EdgeType.TOP, marginTop);
    }


    SetCornerRadius(cornerRadius){
        this.cornerRadius = cornerRadius;
    }

    SetCircle(){
        this.SetCornerRadius("50%");
    }


    get(path){
        console.log("style: ", this.getMarginStyle());
        return (<div class="centered_img" style={{width: this.width, margin: this.getMarginStyle()}}>
            <img src={path} alt="..." class="centered_img" style={{borderRadius: this.cornerRadius}}></img>
        </div>);
    }

}
