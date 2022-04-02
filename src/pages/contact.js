import createFootNote from "../footnote";
import { merge, wrapLanguages, wrapDiv, wrapDivStyled, wrapStyle} from '../utils';
import { EntranceEffect } from '../modules/entrance_effect';
import RawParagraph from '../modules/raw_paragraph';
import articlesContact from "../articles/article_contact";
import TitledContainer from "../modules/titled_container";
import Image from "../modules/Image";
import ImageLinked from "../modules/Image_linked";
import Border from "../config/border";
import Column from "../modules/column";
import InvertableColumn from "../modules/invertable_columns";
import Slider from "../modules/slider";
import { fadeIn, fadeInDelayed, fadeInExplosiveDelayed} from "../modules/defaults/entrance_effect";
import { staffInformationLeo, staffInformationZhadar, 
    staffInformationSakazuki, staffInformationAbner, staffInformationSteve} 
from "../modules/staff_information";


const Contact = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    
    const App = merge(
        createDescription(), 
        createSocialMedia(), 
        createStaffs(), 
        createFootNote(0)
    );

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
};
  
export default Contact;


function createDescription(){
    var paragraph = new RawParagraph();
    paragraph.setSuptitle("Contact");
    //paragraph.setTitle("World Wide Support for Haato");
    paragraph.setPassage(articlesContact.description.map(
        function(x){return wrapLanguages(x)}));
    return wrapStyle({marginBottom: "5%"}, paragraph.get());
}


function createSocialMedia(){
    var img = new ImageLinked();
    var waterMark = new Image();
    waterMark.setWidth("50%");

    img.setWidth("100%");
    img.setWaterMark(waterMark.get("fig/common/icons/ext_link.png"));

    var iconHolder = new Column(2);
    iconHolder.setMargin(Border.ALL, "0px");
    iconHolder.setColumnInterval("5px");

    var iconHolderRow = new InvertableColumn();
    iconHolderRow.setMargin(Border.ALL, "20px");

    const preffix = "fig/common/icons/";
    const paths = ["discord.png", "twitter.png", "email.png", "github.png"];
    var links = [];
    links.push("https://discord.gg/HqQ5n2cMBY");
    links.push("https://twitter.com/WWS_Haato");
    links.push("mailto:wws.haato@gmail.com")
    links.push("https://github.com/wws-haato");
    for(var i = 0; i < 4; i++){
        const colID = i%2;
        iconHolder.insert(colID, img.get(preffix+paths[i], links[i]));
        if(colID)
            iconHolderRow.insert((i-colID)/2, iconHolder.get());
    }


    //"titled-media-text"
    var items = [];
    

    items.push(fadeInDelayed.get(wrapDiv("title", 
        wrapLanguages({en: "Official accounts", jp: "公式アカウント"}))));

    items.push(fadeInExplosiveDelayed.get(
        wrapStyle({margin: "0 20%"}, iconHolderRow.get())));
        
    items.push(fadeInDelayed.get(wrapDiv("passage", 
        wrapLanguages(articlesContact.informationPassage))));

    var titledContainer = new TitledContainer();
    titledContainer.setTitle("SNS");
    titledContainer.setFontColor(255, 255, 255, 1);
    titledContainer.setTitleColor(70, 132, 219, 1);
    titledContainer.setBodyColor(60, 112, 185, 1);
    titledContainer.setLeft();

    return titledContainer.get(wrapDiv("titled-media-text",items));
    
}

function createStaffs(){
    var titledContainer = new TitledContainer();
    titledContainer.setTitle("Staff");
    titledContainer.setFontColor(255, 255, 255,1);
    titledContainer.setTitleColor(229, 49, 76, 1);
    titledContainer.setBodyColor(181, 38, 59, 1);
    titledContainer.setRight();

    var slider = new Slider();
    slider.append(staffInformationLeo.get());
    slider.append(staffInformationZhadar.get());
    slider.append(staffInformationSakazuki.get());
    slider.append(staffInformationAbner.get());
    slider.append(staffInformationSteve.get());

    slider.setClickWidth("4VW");
    slider.setBarColor(229, 49, 76, 1);
    slider.setDotColor(255,255,255,1);
    slider.setWidth("100%");
    
    const leftContent = fadeInExplosiveDelayed.get(slider.get());

    return titledContainer.get(leftContent);
}