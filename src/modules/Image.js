import "../css/image.css";
import { Config, Corner } from "./config";

export default class Image extends Config{
    constructor(){
        super();

    }

    setCircle(){
        this.setCornerRadius(Corner.ALL, "50%");
    }


    get(path){
        var style = {};
        if(this.widthModified)
            style["width"] = this.width;
        if(this.margins.isModified())
            style["margin"] = this.margins.getStyle();
        if(this.cornerRadius.isModified())
            style["borderRadius"] = this.cornerRadius.getStyle();

        return (<div class="centered_img" style={{width: "100%"}}>
            <img src={path} alt="..." class="centered_img" style={style}></img>
        </div>);
    }

}
