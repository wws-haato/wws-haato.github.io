import "./css/footnote.css";

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



export function wrapDiv(args, ... obj){
    if(typeof(args) == "string")
        return <div className={args}>{merge(obj)}</div>;

    else if(args.length)
        return wrapDivRecursive(args, obj);

    return <div className={args.className} style = {args.style}>{merge(obj)}</div>;
}

export function wrapDivStyled(name, style,  ... obj){
    return <div className={name} style={style}>{merge(obj)}</div>;
}


export function wrapDivRecursive(args, ... objs){
    if(!args.length)
        return merge(objs);

    var arg = args.pop();
    if(typeof(arg)=="string")
        arg = {className: arg};
    else if(!arg.className)
        arg.className = "";

    if(!arg.style)
        arg.style = {};

    if(!arg.id)
        arg.id = "";

    objs = <div id={arg.id} className={arg.className} style={arg.style}>{objs}</div>;
    return wrapDivRecursive(args, objs);
}

export function wrapLink(link, item){
    return <a href={link}>{item}</a>
}

export function scrolledIntoView(elem){
    return elem.getBoundingClientRect().top < window.innerHeight;
}