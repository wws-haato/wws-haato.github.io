import "../css/image.css";
import Boarder from "./border";

export default class Youtube{
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

    setWidth(val){
        this.width = val;
    }


    get(link){
        return (
            <iframe style={{
                margin: this.margin.getStyle(), 
                padding: this.padding.getStyle()
            }} src={link}></iframe>
        );
    }

}
