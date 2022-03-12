import "./css/header.css";
import "./css/subtitle.css";
import "./css/footnote.css";
import Column from "./modules/column";
import Boarder from "./modules/border";
import Image from "./modules/Image";

export function createHeader() {
    return (
        <div class="header">
            <div class="language_toggle">
            <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇯🇵 日本語 </a> 
                | 
            <a href="https://virtualyoutuber.fandom.com/wiki/Akai_Haato">🇺🇸 English </a> 
            </div>

            <div class="button">Current Event</div>
            <div class="button">Previous Works</div>
            <div class="button">Contact</div>
        </div>
    );
}

export function createFootNote(){
    var cols = new Column(2);
    const buttoms = ["HAACHAMA Ch. Akai Haato", "Contact us"];
    cols.setColumnInterval("0%");

    var img = new Image();
    img.setWidth("1.5VW");

    const prefix = "fig/common/icons/";
    const filenames = ["youtube.png", "contact.png"];
    for(var i = 0; i < buttoms.length; i++)
        cols.insert(i, <div class="button" style={{fontSize: "1.2VW"}}>
            {img.get(prefix.concat(filenames[i]))}{buttoms[i]}</div>);

    return(
        <div className="footnote">
            <div style = {{color: "white", margin: "0.75VW auto", fontSize: "2.4VW"}}>
                WWS Haato is a non-profit team </div>
            <div style = {{color: "white", margin: "0.75VW auto", fontSize: "1.8VW"}}>
                none of our productions would ever be monetized </div>
            {cols.get()}
        </div>
    );
}

export function createTopMarginedPageTitle(title){
    return <div class="page_title">{title}</div>
} 


export function createSubtitle(title) {
  return (
    <div id="subtitle">
      <div id="child header" class="title">{title}</div>
    </div>
  );
}


export function merge(... objs){
    return (<>{
        objs.map(function(x){return(<>{x}</>);})
    }</>);

}

/**
* @param {string} arg val, suffixed by % or px
*/
export function getRawNumberAndSuffix(arg){
    var iend = arg.length-1;
    for(; iend > -1; iend--)
        if(arg[iend] >= '0' && arg[iend] <= '9')
            break;
    
    iend++;
    return {suffix: arg.substring(iend, arg.length), 
        val: parseFloat(arg.substring(0, iend))};
}

export function isCellphone(){
    return window.innerWidth < 900;
}