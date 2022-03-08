import "../css/bulletin.css";


export class Bulletin{
    constructor(height){
        this.height = height;
        this.rowWidth = "50%";
        this.items = [];
    }

    AppendItem(item){
        this.items.push(item);
    }

    Generate(){
        return (<div class="scrollable_bulletin" style={{height: this.height}}>{
            this.items.map(function(x, i){
                return (<div class="column" 
                    style={{maxWidth: x.GetWidth()}} key={i}> {x.GetItem()}
                </div>);
            })
        }</div>);
    }

}
