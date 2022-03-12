import "../css/image.css";
import Boarder from "./border";

export default class Image{
    constructor(){
        this.width = "100%";
        this.margin =  new Boarder();
        this.padding =  new Boarder();
        this.corner = new Boarder();

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


    get(path){
        console.log(path);
        return (<div className="centered_img" style={{width: "100%"}}>
            <img src={path} alt="..." class="centered_img" 
            style={{width: this.width, borderRadius: this.corner.getStyle()}}></img>
        </div>);
    }

}
