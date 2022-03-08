import "../css/bulletin.css";


export class Bulletin{
    constructor(height){
        this.height = height;
        this.items = [];
    }

    append(item){
        this.items.push(item);
    }
S
    get(){
        return (<div class="scrollable_bulletin" style={{height: this.height}}>{
            this.items.map(function(x, i){
                return (<div class="message" key={i}> {x}
                </div>);
            })
        }</div>);
    }

}
