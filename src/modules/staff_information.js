import TitledContainer from "./titled_container";
import { merge, wrapDiv, wrapDivStyled, wrapDivRecursive} from "../utils";
import "../css/staff_information.css";
import Slider from "./slider";
import Column from "./column";
import Image from "./Image";
import Boarder from "./config/border";
import { Mutex } from "async-mutex";
import { fadeInExplosive } from "./defaults/entrance_effect";
import { fadeInRightwards } from "./defaults/entrance_effect";
import InvertableColumn from "./invertable_columns";
import ImageLinked from "./Image_linked";


export default class StaffInformation extends Column{
    constructor(){
        super(2);
        this.setRatios(3, 7);
        this.setColumnInterval("0px");
        this.utc = 0;
        this.discord = ""
        this.languages = []
        this.imgPath = ""
        this.socialMedias = []
        //this.setMargin(Boarder.LEFT, "5%");
    }

    setImagePath(path){
        this.imgPath = path
    }

    setTimeZone(utc){
        this.utc = utc;
    }

    setDiscord(discord){
        this.discord = discord;
    }

    appendLanguage(language){
        this.languages.push(language)
    }

    appendSocialMedia(imgPath, link){
        this.socialMedias.push({path: imgPath, link: link});
    }

    get(){
        var img = new Image();
        img.setWidth("50%");
        var imgLinked = new ImageLinked();
        imgLinked.setWidth("30%");
        imgLinked.setWaterMark(img.get("fig/common/icons/ext_link.png"));
        var socialPfps = new Column(this.socialMedias.length);
        socialPfps.setColumnInterval("5px");
        var colID = 0;
        for(let sns of this.socialMedias)
            socialPfps.insert(colID++, imgLinked.get(sns.path, sns.link));

        img.setWidth("85%");
        img.setCircle();
        img.setMargin(Boarder.BOTTOM, "10px");
        this.insert(0, img.get(this.imgPath), socialPfps.get());

        var textInfos = [];
        textInfos.push(wrapDiv("title", "Discord"));
        textInfos.push(wrapDiv("passage", this.discord));
        textInfos.push(wrapDiv("title", "Time Zone"));
        textInfos.push(wrapDiv("passage", "UTC"+(this.utc < 0? '':'+')+ this.utc.toString()));
        textInfos.push(wrapDiv("title", "Langauges"));

        var languages = "";
        for(var i = 0; i < this.languages.length; ++i){
            if(i == this.languages.length-1)
                languages += " & ";
            else if(i)
                languages += ", ";

            languages+=this.languages[i];
        }
            
        textInfos.push(wrapDiv("passage", languages));
        this.insert(1, wrapDiv("staff-information", textInfos));

        return super.get();
        
    }
}