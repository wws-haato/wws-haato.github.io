export class Config{
    constructor(){
        this.width = "100%";
        this.height = "auto";
        this.margins = ["auto", "auto", "auto", "auto"];
        this.paddings = ["auto", "auto", "auto", "auto"];
        this.cornerRadius = ["auto", "auto", "auto", "auto"];

    }

    /**
     * @param {String} margin margin, suffixed by % or px
     * @param {number} edgeType type of edge. possible values: 
     *  - EdgeType.TOP   
     *  - EdgeType.BOTTOM 
     *  - EdgeType.LEFT 
     *  - EdgeType.RIGHT 
     *  - EdgeType.LEFT_AND_RIGHT 
     *  - EdgeType.ALL 
     */
    setMargin(edgeType, margin){
        if(edgeType==EdgeType.ALL)
            this.margins.fill(margin, 0, 3);
        else if(edgeType==EdgeType.LEFT_AND_RIGHT)
            this.margins[EdgeType.RIGHT]=this.margins[EdgeType.LEFT]=margin
        else
            this.margins[edgeType]=margin;
            
    }

    getMarginStyle(){
        var style = "";
        for(var i = 0; i < 4; i++)
            style = style.concat(this.margins[i], " ");
    
        return style
    }

}


export const EdgeType = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2, 
    LEFT: 3, 
    //arbitrary order
    LEFT_AND_RIGHT: 4,
    ALL: 5
}

export const CornerType = {
    TOP_LEFT: 0, 
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3, 
    //arbitrary order
    TOP_CORNERS: 4, 
    ALL: 5
    
}