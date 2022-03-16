import "../css/info_block.css";
import InvertableColumn from "./invertable_columns"; 
import { merge, wrapDiv} from "../utils";
import Boarder from "./config/border";
import { fadeInRightwards } from "./defaults/entrance_effect";

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
        const subtitle = wrapDiv("info_block_title", this.subtitle);
        const paragraph = wrapDiv("info_block_paragraph", this.paragraph);
        const textBlock = wrapDiv("info_block_cell_container", subtitle, paragraph);
        const graphtitle = wrapDiv("info_block_graphic_title", this.graphicTitle);

        this.insert(this.graphId, graphtitle, this.graphic);
        this.insert(1-this.graphId,  textBlock);

        const title = wrapDiv("info_block_top_banner", this.title);
        return merge(title, <div style={{width: "100%"}}>{this.get()}</div>);
    }
}