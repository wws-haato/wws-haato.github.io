import "../css/info_block.css";
import InvertableColumn from "./invertable_columns"; 
import { merge, wrapDiv, wrapDivStyled} from "../utils";
import Boarder from "./config/border";
import { fadeInRightwards, fadeInDelayed, 
    fadeInExplosiveDelayed, fadeInLeftwardsLatched
} from "./defaults/entrance_effect";

import ColourRGBA from "./config/colour_rgba";

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
        this.buttonText = "";
        this.title = "";
        this.graphicTitle = "";
        this.setMargin(Boarder.LEFT, "10%");
        this.link = "";
        this.textColour = new ColourRGBA(255,255,255,1);
        this.darkColour = new ColourRGBA(65,105,255,1); 
        this.lightColour = new ColourRGBA(135,206,235,1);
    }


    setTextColour(r, g, b, a){
        this.textColour = new ColourRGBA(r, g, b, a);
    }
    setDarkColour(r, g, b, a){
        this.darkColour = new ColourRGBA(r, g, b, a);
    }
    setLightColour(r, g, b, a){
        this.lightColour = new ColourRGBA(r, g, b, a);
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
    setButton(text, link){
        this.buttonText = text;
        this.link = link;
    }
    setParagraph(paragraph){
        this.paragraph = paragraph;
    }


    getBlock(){
        const style = {color: this.textColour.get()};
        const subtitle = wrapDivStyled("info_block_title", style, this.subtitle);
        const paragraph = wrapDivStyled("info_block_paragraph", style,  this.paragraph);
        const graphtitle = wrapDivStyled("info_block_graphic_title", style, this.graphicTitle);

        var textCol = [fadeInDelayed.get(subtitle), fadeInExplosiveDelayed.get(paragraph)];
        if(this.buttonText){
            const button = <div style={{marginLeft: "15%", marginRight: "15%"}}>{
                wrapDivStyled("info_block_button", {color: this.textColour.get(), 
                background: this.lightColour.get(), }, this.buttonText)}</div>
            
            textCol.push( <a href={this.link}>{fadeInLeftwardsLatched.get(button)}</a>);
        }
            
        
        this.insert(this.graphId, fadeInDelayed.get(graphtitle), fadeInExplosiveDelayed.get(this.graphic));
        this.insert(1-this.graphId, textCol);
        this.setColour(this.darkColour.r, this.darkColour.g, this.darkColour.b, this.darkColour.a);
        const thisGet = this.get();

        const shadow = this.darkColour.divide(2).add(new ColourRGBA(0,0,0,0.5));
        const title = wrapDivStyled("info_block_top_banner", {color: this.textColour.get(), 
            background: this.lightColour.get(), boxShadow:  "2.5px 2.5px 5px "+shadow.get()}, this.title);
        //style.background = this.lightColour.get();
        
        return merge(fadeInRightwards.get(title), <div style={{width: "100%"}}>{thisGet}</div>);
    }
}