import "../css/column.css";
import { merge } from "../object_creation";


class ItemWithWidth{
    constructor(){
        this.item = 0;
        this.width = 100;
    }

    SetItem(item){
        this.item = item;
    }

    SetWidth(width){
        this.width = width;
    }

    GetItem(){
        return this.item; 
    }

    GetWidth(suffix){
        var prefix = "calc(";
        return prefix.concat(this.width.toString(), 
            "% - ", suffix, ")");
        
    }

}


export class Column{
    constructor(nCols){
        this.marginTop = "0px";
        this.rowWidth = "50%";

        this.itemsAndWidths = [];
        for(var i = 0; i < nCols; i++){
            var itemWithWidth = new ItemWithWidth();
            this.itemsAndWidths.push(itemWithWidth);

        }

        this.SetRatiosEqually();
    }

    SetRatiosEqually(){
        var colWidths = [];
        for(var i = 0; i < this.itemsAndWidths.length; i++)
            colWidths.push(1);

        this.SetWidthRatios(colWidths);
    }

    SetWidthRatios(ratios){
        var sum = 0.0;
        for(var i = 0; i < this.itemsAndWidths.length; i++)
            sum+=ratios[i];
        
        for(var i = 0; i < this.itemsAndWidths.length; i++)
            this.itemsAndWidths[i].SetWidth(100.0*ratios[i]/sum);
        
    }

    insert(ind, ...items){
        this.itemsAndWidths[ind].SetItem(merge(items));
    }
    
    SetRowWidth(width){
        this.rowWidth = width;
    }


    SetMarginTop(padding){
        this.marginTop = padding;
    }


    get(){
        return (<div class="row" style={{width: this.rowWidth, margin: this.marginTop.concat(" auto")}}>{
            this.itemsAndWidths.map(function(x, i){
                return (<div class="column" 
                    style={{maxWidth: x.GetWidth("10px")}} key={i}> {x.GetItem()}
                </div>);
            })
        }</div>);
    }

}
