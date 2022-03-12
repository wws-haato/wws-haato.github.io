export class Config{
    constructor(){
        this.width = "auto";
        this.widthModified = false;
        this.height = "auto";
        this.heightModified = false;
        this.margins = new RectangularConfig();
        this.paddings = new RectangularConfig();
        this.cornerRadius = new RectangularConfig();
    }

     /**
     * @param {String} val val of width, suffixed by % or px
     */
    setWidth(val){
        this.width = val;
        this.widthModified = true;
    }


    /**
     * @param {String} val val of height, suffixed by % or px
     */
    setHeight(val){
        this.height = val;
        this.heightModified = true;
    }

    
    /**
     * @param {String} val val, suffixed by % or px
     * @param {number} edgeType type of edge. possible values: 
     *  - Edge.TOP   
     *  - Edge.BOTTOM 
     *  - Edge.LEFT 
     *  - Edge.RIGHT 
     *  - Edge.LEFT_AND_RIGHT 
     *  - Edge.ALL 
     */
    setMargin(edgeType, val){
        this.margins.set(edgeType, val);  
    }


    /**
     * @param {String} val val, suffixed by % or px
     * @param {number} edgeType type of edge. possible values: 
     *  - Edge.TOP   
     *  - Edge.BOTTOM 
     *  - Edge.LEFT 
     *  - Edge.RIGHT 
     *  - Edge.LEFT_AND_RIGHT 
     *  - Edge.ALL 
     */
    setPadding(edgeType, val){
        this.paddings.set(edgeType, val);  
    }


    /**
     * @param {String} val val, suffixed by % or px
     * @param {number} type type of corner. possible values: 
     *  - Corner.TOP_LEFT  
     *  - Corner.TOP_RIGHT
     *  - Corner.BOTTOM_RIGHT  
     *  - Corner.BOTTOM_LEFT 
     *  - Corner.ALL 
     */
    setCornerRadius(type, val){
        this.cornerRadius.set(type, val);  
    }


    getStyle(){
        var styles = {};
        if(this.cornerRadius.isModified())
            styles[borderRadius] = this.cornerRadius.getStyle();
        if(this.paddings.isModified())
            styles[padding] = this.paddings.getStyle();
        if(this.cornerRadius.isModified())
            styles[borderRadius] = this.cornerRadius.getStyle();
        if(this.widthModified)
            styles[width] = this.width;
        if(this.heightModified)
            styles[height] = this.height;

        
        return styles
    }


}


export const Edge = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2, 
    LEFT: 3, 
    //arbitrary order
    ALL: 4
}

export const Corner = {
    TOP_LEFT: 0, 
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3, 
    //arbitrary order
    ALL: 4
    
}


class RectangularConfig{
    constructor(){
        this.modifided = false;
        this.data = ["0", "0", "0", "0"];
    }
    
    set(edgeType, val){
        this.modifided = true;
        if(edgeType==4)
            this.data.fill(val, 0, 3);
        else
            this.data[edgeType]=val;
    }

    getStyle(){
        var style = "";
        for(var i = 0; i < 4; i++)
            style = style.concat(this.data[i], " ");
    
        return style
    }

    isModified(){
        return this.modifided;
    }


}