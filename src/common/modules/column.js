import "../css/column.css";


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

    GetWidth(){
        var prefix = this.width.toString();
        return prefix.concat("%");
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

    InsertItem(ind, item){
        this.itemsAndWidths[ind].SetItem(item);
    }
    
    SetRowWidth(width){
        this.rowWidth = width;
    }


    SetMarginTop(padding){
        this.marginTop = padding;
    }


    GenerateColumns(){
        return (<div class="row" style={{width: this.rowWidth, margin: this.marginTop.concat(" 0px")}}>{
            this.itemsAndWidths.map(function(x, i){
                return (<div class="column" 
                    style={{width: x.GetWidth()}} key={i}> {x.GetItem()}
                </div>);
            })
        }</div>);
    }

}
