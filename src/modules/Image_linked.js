import "../css/image.css";
import Image from "./Image";
import { wrapDiv, wrapDivStyled } from "../utils";

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
                <div className="img_hover">
                    <div className="centered_img" style={{width: "100%"}}>
                        <img src={path} alt="..." class="centered_img" 
                        style={{width: this.width, borderRadius: this.corner.get()}}>
                            
                        </img>
                        {wrapDivStyled("water_mark", {width: this.width}, this.waterMark)}
                    </div>
                </div>
            </a>
        );
    }

}
