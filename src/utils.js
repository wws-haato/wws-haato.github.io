import "./css/header.css";
import "./css/subtitle.css";
import "./css/footnote.css";
import Column from "./modules/column";
import Boarder from "./modules/config/border";
import Image from "./modules/Image";


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