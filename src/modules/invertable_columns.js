import Boarder from "./border";
import "../css/invertable_columns.css";
import { merge, getRawNumberAndSuffix} from "../utils";

export default class InvertableColumn{
    constructor(){
        this.items = [0, 0];
        this.margin =  new Boarder();
        this.padding =  new Boarder();
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
            <div className="invertable_row" style = {{
                margin: this.margin.getStyle(), padding: this.padding.getStyle()}}>
                {this.items.map(function(x, i){
                    return (<div className="invertable_columns" key={i}> {x}</div>);
                })}
            </div>
        );

    }

}
