import "../css/column.css";
import { merge } from "../utils";
import Boarder from "./border";
import { getRawNumberAndSuffix } from "../utils";


export default class Column{
    constructor(nCols){
        this.nCols = nCols;
        this.items = [];
        this.ratios = [];
        this.margin =  new Boarder();
        this.padding =  new Boarder();
        this.colInterval = "10px";
        this.textAligns = [];
        
        const avg = 100.0/this.nCols;
        for(var i = 0; i < nCols; i++){
            this.items.push(0);
            this.ratios.push(avg);
            this.textAligns.push("center");
        }

    }

    setTextAlignment(ind, align){
        this.textAligns[ind] = align;
    }

    setRatiosEqually(){
        this.ratios.fill(100.0/this.nCols);
    }

    setColumnInterval(val){
        this.colInterval = val;
    }

    setMargin(ind, val){
        this.margin.set(ind, val);
    }
    setPadding(ind ,val){
        this.padding.set(ind, val);
    }

    setRatios(...ratios){
        var sum = 0.0;
        for(let r of ratios)
            sum+=r;
        
        for(var i = 0; i < this.nCols; i++)
            this.ratios[i] = 100.0*ratios[i]/sum;
    }

    insert(ind, ...items){
        this.items[ind] = merge(items);
    }


    get(){
        const rawSuf = getRawNumberAndSuffix(this.colInterval);
        const extInt = (rawSuf.val/2).toString().concat(rawSuf.suffix);
        const colInt = this.colInterval.concat(')');
        const preffix = "calc(";
        let items = this.items;
        let aligns = this.textAligns;
        return (
            <div className="w3-container" style = {{maxWidth: "auto",
                margin: this.margin.getStyle(), padding: this.padding.getStyle()}}>
                <div className="row" style={{maxWidth: "auto"}}>{
                    this.ratios.map(function(r, i){
                        var colBorder = new Boarder();
                        colBorder.set(Boarder.LEFT, extInt);
                        colBorder.set(Boarder.RIGHT, extInt);
                            
                        var width = preffix.concat(r.toString(), "% - ");
                        width+=colInt;
                        
                        return (<div className="column" 
                        style={{maxWidth: width, margin: colBorder.getStyle(), 
                            textAlign: aligns[i]}} key={i}> {items[i]}</div>);
                    })
                }</div>
            </div>
        );
    }

}
