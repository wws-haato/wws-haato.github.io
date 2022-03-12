import "./css/header.css";
import "./css/subtitle.css";

export function CreateHeader() {
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

export function CreateTopMarginedPageTitle(title){
    return <div class="page_title">{title}</div>
} 


export function CreateSubtitle(title) {
  return (
    <div id="subtitle">
      <div id="child header" class="title">{title}</div>
    </div>
  );
}


export function merge(... objs){
    return (<>{
        objs.map(function(x, i){return(<>{x}</>);})
    }</>);

}

/**
* @param {string} arg val, suffixed by % or px
*/
export function getRawNumberAndSuffix(arg){
    var numEnd = arg.length-1;
    for(; numEnd > -1; numEnd--)
        if(arg[numEnd] >= '0' && arg[numEnd] <= '9')
            break;
    
    numEnd++;
    return {suffix: arg.substring(numEnd, arg.length), 
        val: parseFloat(arg.substring(0, numEnd))};
}