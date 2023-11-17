import {wrapDiv, wrapLanguages, wrapStyle} from "../utils";
import "../css/staff_information.css";
import Column from "./column";
import Image from "./Image";
import Border from "../config/border";
import ImageLinked from "./Image_linked";
import InvertableColumn from "./invertable_columns";


export default class StaffInformation extends InvertableColumn{
    constructor(){
        super();
        //this.setRatios(25, 75);
        //this.setColumnInterval("0px");
        this.timeZone = 0;
        this.discord = ""
        this.languages = []
        this.imgPath = ""
        this.socialMedias = []
    }

    setImagePath(path){
        this.imgPath = path
    }

    setTimeZone(timeZone){
        this.timeZone = timeZone;
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
        const margin = (100-15*this.socialMedias.length)/2;

        socialPfps.setColumnInterval("5px");
        socialPfps.setMargin(Border.LEFT, margin.toString()+'%');
        socialPfps.setMargin(Border.RIGHT, margin.toString()+'%');
        var colID = 0;
        for(let sns of this.socialMedias)
            socialPfps.insert(colID++, imgLinked.get(sns.path, sns.link));
        
        img.setWidth("45%");
        img.setCircle();
        img.setMargin(Border.BOTTOM, "5px");
        this.insert(0, img.get(this.imgPath),  socialPfps.get());

        var textInfos = [];
        textInfos.push(wrapDiv("title", "Discord"));
        textInfos.push(wrapDiv("passage", this.discord));

        textInfos.push(wrapDiv("title", wrapLanguages({en: "Time Zone", jp: "タイムゾーン"})));
        var time = this.timeZone;
        if (typeof(time) == typeof(0))
            time = "UTC" + (time < 0? '': '+') + time.toString();

        textInfos.push(wrapDiv("passage", time));
        textInfos.push(wrapDiv("title", wrapLanguages({en: "Languages", jp: "言語"})));

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
    staffInfo.setDiscord("leohsieh");
    staffInfo.setTimeZone("EST");
    staffInfo.setImagePath("fig/pfp/leo.jpg");
    staffInfo.appendLanguage("Chinese");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Japanese");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/LeoHsieh57");

    return staffInfo;
}

function getStaffInformationZhadar(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("zhadar.");
    staffInfo.setTimeZone(1);
    staffInfo.setImagePath("fig/pfp/zhadar.jpg");
    staffInfo.appendLanguage("German");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/HaatonZhadi");
    staffInfo.appendSocialMedia("fig/common/icons/reddit.png", 
        "https://www.reddit.com/user/HaatonZhadi");

    return staffInfo;
}

function getStaffInformationSakazuki(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("feathergrail");
    staffInfo.setTimeZone(9);
    staffInfo.setImagePath("fig/pfp/saka.png");
    staffInfo.appendLanguage("Chinese");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Japanese");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/henry4204aaa");

    return staffInfo;
}


function getStaffInformationAbner(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("ab.rod");
    staffInfo.setTimeZone(-6);
    staffInfo.setImagePath("fig/pfp/abner.jpg");
    staffInfo.appendLanguage("Spanish");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/UltimateAbrod");
    staffInfo.appendSocialMedia("fig/common/icons/youtube.png", 
        "https://www.youtube.com/channel/UCmX9DnmswDnujsDXWnMyOhw");

    return staffInfo;
}


/*function getStaffInformationSteve(){
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

    return staffInfo;
}*/



export const staffInformationLeo = getStaffInformationLeo();
export const staffInformationZhadar = getStaffInformationZhadar();
export const staffInformationSakazuki = getStaffInformationSakazuki();
export const staffInformationAbner = getStaffInformationAbner();
//export const staffInformationSteve = getStaffInformationSteve();