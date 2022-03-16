import "../css/info_block.css";
import InvertableColumn from "./invertable_columns"; 
import Column from "./column";
import { merge } from "../utils";
import Boarder from "./config/border";


export default class InformationBlock extends InvertableColumn{
    /**
    * @param {boolean} reversed true to set fig at 1, otherwise 0
    */
    constructor(reversed){
        super();
        this.graphId = reversed? 1: 0;
        this.subtitle = "";
        this.paragraph = "";
        this.graphic = 0;
        this.button = "";
        this.title = "";
        this.graphicTitle = "";
        this.setMargin(Boarder.LEFT, "10%");
    }
    setTitle(title){
        this.title = title;
    }

    setGraphicTitle(title){
        this.graphicTitle = title;
    }

    setSubtitle(title){
        this.subtitle = title;
    }
    setGraphic(... graphic){
        this.graphic = graphic
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
                <div className="info_block_title"> {this.subtitle}  </div>
                <div className="info_block_paragraph"> {this.paragraph} </div>
            </div>     
        this.insert(this.graphId, <div className="info_block_graphic_title">
            {this.graphicTitle}</div>, this.graphic);

        this.insert(1-this.graphId,  textBlock);

        const title = <div className="info_block_top_banner">{this.title}</div>;
        return merge(title, <div style={{width: "100%"}}>{this.get()}</div>);
    }
}