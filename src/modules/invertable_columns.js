import Boarder from "./border";
import "../css/invertable_columns.css";
import { merge, getRawNumberAndSuffix} from "../utils";
import { ColourRGBA } from "./navbar";

export default class InvertableColumn{
    constructor(){
        this.items = [0, 0];
        this.margin =  new Boarder();
        this.padding =  new Boarder();
        this.corners = new Boarder();
        this.colour = new ColourRGBA(0, 0, 0, 0);

    }

    setColour(r, g, b, a){
        this.colour = new ColourRGBA(r, g, b, a);
    }

    setCorner(ind, val){
        this.corners.set(ind, val);
    }
    setMargin(ind, val){
        this.margin.set(ind, val);
    }
    setPadding(ind ,val){
        this.padding.set(ind, val);
    }

    insert(ind, ...items){
        this.items[ind] = merge(items);
    }


    get(){
        return (
            <div className="w3-container" style = {{maxWidth: "auto",
                margin: this.margin.getStyle(), padding: this.padding.getStyle(), 
                backgroundColor: this.colour.get(), borderRadius: this.corners.getStyle()}}>
                <div className="invertable_row">
                    {this.items.map(function(x, i){
                        return (<div className="invertable_columns" key={i}> {x}</div>);
                    })}
                </div>
            </div>
        );

    }

}
