import "../css/image.css";
import Image from "./Image";

export default class ImageLinked extends Image{
    constructor(){
        super();
        this.waterMark = 0;
    }

    setWaterMark(item){
        this.waterMark = item;
    }

    get(path, link){
        var img = new Image();
        img.setWidth("50%");
        return(
            <a href={link}>
                <div className="img_hover">
                    <div className="centered_img" style={{width: "100%"}}>
                        <img src={path} alt="..." class="centered_img" 
                        style={{width: this.width, borderRadius: this.corner.getStyle()}}></img>
                    </div>
                    <div class="water_mark">
                        {img.get(this.waterMark)}
                    </div>
                </div>
            </a>
        );
    }

}
