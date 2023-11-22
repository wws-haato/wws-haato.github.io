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
            if(i && i == this.languages.length-1)
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
        "https://twitter.com/_Zhadar_");
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


function getStaffInformationIce(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("icephoenixlala");
    staffInfo.setTimeZone(11);
    staffInfo.setImagePath("fig/pfp/ice.jpg");
    staffInfo.appendLanguage("English");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/IcePhoenixLala");

    return staffInfo;
}

function getStaffInformationSaku(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("sakuya_shihara");
    staffInfo.setTimeZone("PST");
    staffInfo.setImagePath("fig/pfp/saku.jpg");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Japanese");
    staffInfo.appendLanguage("Korean");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/sakuya_shihara");
    staffInfo.appendSocialMedia("fig/common/icons/youtube.png", 
        "https://www.youtube.com/channel/UC4VqLwnxITjcpWoabZj6PRA");

    return staffInfo;
}

function getStaffInformationConkos(){
    var staffInfo = new StaffInformation();
    staffInfo.setDiscord("conkos");
    staffInfo.setTimeZone("PST");
    staffInfo.setImagePath("fig/pfp/conkos.jpg");
    staffInfo.appendLanguage("English");
    staffInfo.appendLanguage("Spanish");
    staffInfo.appendSocialMedia("fig/common/icons/twitter.png", 
        "https://twitter.com/original_bonkos");
    staffInfo.appendSocialMedia("fig/common/icons/youtube.png", 
        "https://www.youtube.com/channel/UC5GzrfngohSzsM_i16Cqd8A");

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
export const staffInformationIce = getStaffInformationIce();
export const staffInformationSaku = getStaffInformationSaku();
export const staffInformationConkos = getStaffInformationConkos();
//export const staffInformationSteve = getStaffInformationSteve();