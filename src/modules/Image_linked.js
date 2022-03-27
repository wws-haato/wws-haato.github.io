import "../css/image.css";
import Image from "./Image";
import {wrapDivStyled } from "../utils";

export default class ImageLinked extends Image{
    constructor(){
        super();
        this.waterMark = 0;
    }

    setWaterMark(item){
        this.waterMark = item;
    }

    get(path, link){
        return(
            <a href={link}>
                <div className="img-hover">
                    <div className="centered-img" style={{width: "100%"}}>
                        <img src={path} alt="..." class="centered-img" 
                        style={{width: this.width, borderRadius: this.corner.get()}}>
                            
                        </img>
                        
                    </div>
                    {wrapDivStyled("water-mark", {width: this.width}, this.waterMark)}
                </div>
            </a>
        );
    }

}
