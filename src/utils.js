import "./css/header.css";
import "./css/subtitle.css";
import "./css/footnote.css";
import Column from "./modules/column";
import Boarder from "./modules/config/border";
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
    cols.setMargin(Boarder.TOP, isCellphone() ? "3.2VW": "1.92VW");

    var img = new Image();
    img.setWidth(isCellphone() ? "2.5VW":"1.5VW");

    const prefix = "fig/common/icons/";
    const filenames = ["youtube.png", "contact.png"];
    for(var i = 0; i < buttoms.length; i++)
        cols.insert(i, <div class="button" style={{fontSize: isCellphone() ? "2VW":"1.2VW"}}>
            {img.get(prefix.concat(filenames[i]))}{buttoms[i]}</div>);

    const marg = isCellphone() ? "1.25VW":"0.75VW"
    return(
        <div className="footnote">
            <div style = {{color: "white", margin: marg+" auto", fontSize: isCellphone() ? "4VW":"2.4VW"}}>
                WWS Haato is a non-profit team </div>
            <div style = {{color: "white", margin: marg+" auto", fontSize: isCellphone() ? "3VW":"1.8VW"}}>
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
      <div id="child header" class="title" 
      style={{fontSize: isCellphone()? "5VW": "3VW"}} >{title}</div>
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


export function wrapDiv(name, ... obj){
    return <div className={name}>{merge(obj)}</div>;
}

export function wrapDivStyled(name, style,  ... obj){
    return <div className={name} style={style}>{merge(obj)}</div>;
}

export function toDivBlock(arg, ... obj){
    if(!arg.style)
        arg.style = {};

    if(arg.className)
        return  <div className={arg.className} style={style}>{merge(obj)}</div>;

    return <div style={style}>{merge(obj)}</div>;
}


export function wrapDivRecursive(args, ... objs){
    if(!args.length)
        return merge(objs);

    var baseArg = args.pop();
    if(!baseArg.style)
        baseArg.style = {};

    if(baseArg.className)
        objs = <div className={baseArg.className} style={baseArg.style}>{objs}</div>;
    else
        objs = <div style={baseArg.style}>{objs}</div>;

    return wrapDivRecursive(args, objs);
}