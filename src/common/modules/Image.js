import "../css/image.css";


export class Image{
    constructor(){
        this.width = "0%";
        this.marginTop = "0px";
        this.cornerRadius = "0px";

    }

    SetWidth(width){
        this.width = width;
    }


    SetMarginTop(marginTop){
        this.marginTop = marginTop;
    }


    SetCornerRadius(cornerRadius){
        this.cornerRadius = cornerRadius;
    }

    SetCircle(){
        this.SetCornerRadius("50%");
    }


    get(path){
        var margin = this.marginTop.concat(" auto auto auto");
        return (<div class="centered_img" style={{width: this.width, margin: margin}}>
            <img src={path} alt="..." class="centered_img" style={{borderRadius: this.cornerRadius}}></img>
        </div>);
    }

}
