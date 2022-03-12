import "../css/bulletin.css";
import Column from "./column";
import Youtube from "./youtube";


export default class Bulletin{
    constructor(height){
        this.height = height;
        this.items = [];
    }

    clear(){
        this.items.clear();
    }

    append(item){
        this.items.push(item);
    }

    get(){
        return (<div class="scrollable_bulletin" style={{height: this.height}}>{
            this.items.map(function(x, i){
                return (<div class="message" key={i}> {x}
                </div>);
            })
        }</div>);
    }

}

export class VideoRelease{
    constructor(){
        this.date = "";
        this.desc = "";
        this.link = "";
        this.cols = new Column(2);
        this.cols.setRatiosEqually();
        this.cols.setTextAlignment(0, "left");
    }

    setDate(date){
        this.date = date;
    }

    setDescription(desc){
        this.desc = desc;
    }

    setYoutubeLink(link){
        this.link = link;
    }

    get(){
        var youtube = new Youtube();
        this.cols.insert(1, youtube.get(this.link));
        const date = <div style = {{color: "white", margin: "7.5px auto", fontSize: "20px"}}>{this.date}</div>;
        const desc = <div style = {{color: "white", fontSize: "15px", marginLeft: "5px"}}>{this.desc}</div>;
        this.cols.insert(0, date, desc);
        return this.cols.get();
    }

}
