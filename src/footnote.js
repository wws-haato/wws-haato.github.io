import "./css/footnote.css";
import Column from "./modules/column";
import Boarder from "./modules/config/border";
import Image from "./modules/Image";
import InvertableColumn from "./modules/invertable_columns";
import { wrapDiv } from "./utils";
import { fadeIn, fadeInExplosiveDelayed} from "./modules/defaults/entrance_effect";


function createFootNoteBotton(text, link, imgPath){
    var img = new Image();
    img.setWidth("2.5VW");
    const content = wrapDiv("button", img.get(imgPath), text);
    
    return fadeInExplosiveDelayed.get(<a href={link}>{content}</a>);
}


export default function createFootNote(){
    var cols = new Column(2);
    const buttoms = ["HAACHAMA Ch. Akai Haato", "Contact us"];
    //cols.setColumnInterval("0%");

    /*var img = new Image();
    img.setWidth("2.5VW");

    const prefix = "fig/common/icons/";
    const filenames = ["youtube.png", "contact.png"];
    for(var i = 0; i < buttoms.length; i++){
        const icon = img.get(prefix.concat(filenames[i]));
        cols.insert(i, wrapDiv("button", fadeInExplosiveDelayed.get(icon), 
            fadeInExplosiveDelayed.get(buttoms[i])));
    }*/
    cols.insert(0, createFootNoteBotton("HAACHAMA Ch. Akai Haato", 
        "https://www.youtube.com/channel/UCCC84LkFYu3vJae52LK_5FA", 
        "fig/common/icons/youtube.png"));
    
    cols.insert(1, createFootNoteBotton("Contact us", 
        "https://discord.gg/HqQ5n2cMBY", "fig/common/icons/contact.png"));

    const title = wrapDiv("", "WWS Haato is a non-profit team");
    const subtitle = wrapDiv("subtitle", "none of our productions would ever be monetized");
    return wrapDiv("footnote", fadeIn.get(title), fadeIn.get(subtitle), cols.get());
       
}