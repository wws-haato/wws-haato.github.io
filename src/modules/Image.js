import "../css/image.css";
import Boarder from "./border";
import { generateUniqueID } from "../utils";

export default class Image{
    constructor(){
        this.width = "100%";
        this.margin =  new Boarder();
        this.padding =  new Boarder();
        this.corner = new Boarder();
        this.id = "";

    }

    setMargin(ind, val){
        this.margin.set(ind, val);
    }
    setPadding(ind ,val){
        this.padding.set(ind, val);
    }
    setCorner(ind, val){
        this.corner.set(ind, val);
    }

    setCircle(){
        this.setCorner(Boarder.ALL, "50%");
    }
    setWidth(val){
        this.width = val;
    }
    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }


    get(path){
        return (
        <div className="w3-container" style = {{maxWidth: "auto",
            margin: this.margin.getStyle(), padding: this.padding.getStyle()}}>
            <div id ={this.getId()} className="centered_img" style={{width: "100%"}}>
                <img src={path} alt="..." class="centered_img" 
                style={{width: this.width, 
                borderRadius: this.corner.getStyle()}} loading="eager"></img>
            </div>
        </div>);
    }

}
