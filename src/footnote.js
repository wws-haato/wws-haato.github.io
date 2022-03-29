import "./css/footnote.css";
import Column from "./modules/column";
import Image from "./modules/Image";
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
    cols.insert(0, createFootNoteBotton("HAACHAMA Ch. Akai Haato", 
        "https://www.youtube.com/channel/UCCC84LkFYu3vJae52LK_5FA", 
        "fig/common/icons/youtube.png"));
    
    cols.insert(1, createFootNoteBotton("Contact us", 
        "https://discord.gg/HqQ5n2cMBY", "fig/common/icons/contact.png"));

    const title = fadeIn.get(wrapDiv("", "WWS Haato is a non-profit team"));
    const notes = [
        [
            "We do NOT have an official business relationship with Cover Corp. ", 
            "We are NOT representing Haachama or other parts of Hololive", 
        ], 
        [
            "All our projects are the works of fans"
        ], 
        [
            "We allow Haachama to use our works for her streams and own projects", 
            "This may include her own monetization"
        ]
    ];

    var passages = [];
    for(let lines of notes)
        passages.push(wrapDiv("passage", lines.map(function(x){
            return wrapDiv("line", x);})));
    
    
    return wrapDiv("footnote", title, passages, cols.get());
       
}