import "../css/info_block.css";
import InvertableColumn from "./invertable_columns"; 
import Column from "./column";
import { merge } from "../utils";


export default class InformationBlock extends InvertableColumn{
    /**
    * @param {boolean} reversed true to set fig at 1, otherwise 0
    */
    constructor(reversed){
        super();
        this.graphId = reversed? 1: 0;
        this.title = "";
        this.paragraph = "";
        this.graphic = 0;
        this.button = "";
    }

    setTitle(title){
        this.title = title;
    }
    setGraphic(... graphic){
        this.insert(this.graphId, graphic);
    }
    setButtonText(button){
        this.button = button;
    }
    setParagraph(paragraph){
        this.paragraph = paragraph;
    }

    getBlock(){
        const textBlock = 
        <div className="info_block_cell_container">
            <div className="info_block_title"> {this.title}  </div>
            <div className="info_block_paragraph"> {this.paragraph} </div>
        </div>     
            
        this.insert(1-this.graphId, textBlock);
        return <div style={{width: "100%"}}>{this.get()}</div>;
        return textBlock;
    }
}