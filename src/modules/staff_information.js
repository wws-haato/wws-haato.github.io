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
        imgLinked.setWidth("100%");
        imgLinked.setWaterMark(img.get("fig/common/icons/ext_link.png"));

        var socialPfps = new Column(this.socialMedias.length);
        const margin = (100-30*this.socialMedias.length)/2;

        socialPfps.setColumnInterval("5px");
        socialPfps.setMargin(Boarder.LEFT, margin.toString()+'%');
        socialPfps.setMargin(Boarder.RIGHT, margin.toString()+'%');
        var colID = 0;
        for(let sns of this.socialMedias)
            socialPfps.insert(colID++, imgLinked.get(sns.path, sns.link));
        
        img.setWidth("75%");
        img.setCircle();
        img.setMargin(Boarder.BOTTOM, "5px");
        this.insert(0, img.get(this.imgPath), socialPfps.get());

        var textInfos = [];
        textInfos.push(wrapDiv("title", "Discord"));
        textInfos.push(wrapDiv("passage", this.discord));
        textInfos.push(wrapDiv("title", "Time Zone"));
        textInfos.push(wrapDiv("passage", "UTC"+(this.utc < 0? '':'+')+ this.utc.toString()));
        textInfos.push(wrapDiv("title", "Languages"));

        var languages = "";
        for(var i = 0; i < this.languages.length; ++i){
            if(i == this.languages.length-1)
                languages += " & ";
            else if(i)
                languages += ", ";

            languages+=this.languages[i];
        }
            
        textInfos.push(wrapDiv("passage", languages));
        this.insert(1, textInfos);

        return wrapDiv("staff-information", super.get());
        
    }
}

function getStaffInformationLeo(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("Leo Hsieh#0227");
    staffInfo.setTimeZone(8);
    staffInfo.setImagePath("fig/pfp/leo.jpg");
    staffInfo.appendLanguage("Chinese");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Japanese");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/LeoHsieh57");

    return staffInfo.get();
}

function getStaffInformationZhadar(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("Zhadar#9618");
    staffInfo.setTimeZone(1);
    staffInfo.setImagePath("fig/pfp/zhadar.jpg");
    staffInfo.appendLanguage("German");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/HaatonZhadi");
    staffInfo.appendSocialMedia("fig/common/icons/reddit.png", 
        "https://www.reddit.com/user/HaatonZhadi");

    return staffInfo.get();
}

function getStaffInformationSakazuki(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("羽の觴#4204");
    staffInfo.setTimeZone(8);
    staffInfo.setImagePath("fig/pfp/saka.png");
    staffInfo.appendLanguage("Chinese");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Japanese");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/henry4204aaa");

    return staffInfo.get();
}


function getStaffInformationAbner(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("UltimateAbRod#0949");
    staffInfo.setTimeZone(-6);
    staffInfo.setImagePath("fig/pfp/abner.jpg");
    staffInfo.appendLanguage("Spanish");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/UltimateAbrod");
    staffInfo.appendSocialMedia("fig/common/icons/youtube.png", 
        "https://www.youtube.com/channel/UCmX9DnmswDnujsDXWnMyOhw");

    return staffInfo.get();
}


function getStaffInformationSteve(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("števe#0456");
    staffInfo.setTimeZone(7);
    staffInfo.setImagePath("fig/pfp/steve.jpg");
    staffInfo.appendLanguage("Vietnamese");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/le_hoang_dung");
    staffInfo.appendSocialMedia("fig/common/icons/reddit.png", 
        "https://www.reddit.com/user/HoangDung007");

    return staffInfo.get();
}



export const staffInformationLeo = getStaffInformationLeo();
export const staffInformationZhadar = getStaffInformationZhadar();
export const staffInformationSakazuki = getStaffInformationSakazuki();
export const staffInformationAbner = getStaffInformationAbner();
export const staffInformationSteve = getStaffInformationSteve();