import createFootNote from "../footnote";
import { merge, wrapLanguages, wrapDiv, wrapDivStyled} from '../utils';
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
        createStaffs()
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
    return wrapDivStyled("", {marginBottom: "0%"}, paragraph.get());
}


function createStaffs(){
    var titledContainer = new TitledContainer();
    titledContainer.setTitle("Information");
    titledContainer.setFontColor(255, 255, 255,1);
    titledContainer.setTitleColor(229, 49, 76, 1);
    titledContainer.setBodyColor(181, 38, 59, 1);
    titledContainer.setRight();
    
    var cols = new InvertableColumn();
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
    const passage = fadeInDelayed.get(wrapDiv("passage", 
        wrapLanguages(articlesContact.informationPassage)));

    const subtitle = fadeInDelayed.get(wrapDiv("title", 
        wrapLanguages({en: "Social Media", jp: "SNS"})));

    const icons = fadeInExplosiveDelayed.get(wrapDivStyled("", {margin: "0 20%"}, iconHolderRow.get()));
    
    cols.insert(1, wrapDiv("titled-media-text", subtitle, icons, passage));


    var slider = new Slider();
    slider.append(staffInformationLeo.get());
    slider.append(staffInformationZhadar.get());
    slider.append(staffInformationSakazuki.get());
    slider.append(staffInformationAbner.get());
    slider.append(staffInformationSteve.get());

    slider.setClickWidth("4VW");
    slider.setBarColor(229, 49, 76, 1);
    slider.setDotColor(255,255,255,1);
    slider.setWidth("95%");

    const leftTitle = fadeInDelayed.get(wrapDiv("title", 
        wrapLanguages({en: "Staff", jp: "スタッフ"})));
    const leftContent = fadeInExplosiveDelayed.get(slider.get());
    cols.insert(0, wrapDiv("titled-media-text", leftTitle), leftContent);

    return titledContainer.get(cols.get());
}