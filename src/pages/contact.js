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
    staffInformationSakazuki, staffInformationAbner, staffInformationSteve, staffInformationIce, staffInformationSaku, staffInformationConkos} 
from "../modules/staff_information";
import TitledMediaText from "../modules/titled_media_text";


const Contact = () => {
    EntranceEffect.stopAllRequest();
    window.scrollTo(0, 0);
    
    const App = merge(
        createHeader(), 
        createStaffs(), 
        createBussiness(), 
        createFootNote(0)
    );

    EntranceEffect.startAllRequest();
    EntranceEffect.debug();
    
    return App;
};
  
export default Contact;


function createHeader(){
    var paragraph = new RawParagraph();
    paragraph.setSuptitle("Contact");
    return wrapStyle({marginBottom: "5%"}, paragraph.get());
}


function createBussiness(){
    var mediaText = new TitledMediaText();
    mediaText.setTitle("Email");
    mediaText.initFromArticle(articlesContact.bussiness);
    
    mediaText.setFontColor(255, 255, 255,1);
    mediaText.setBodyColor(60, 112, 185, 1); 
    mediaText.setTitleColor(70, 132, 219, 1);
    mediaText.setLeft();

    var img = new Image();
    img.setWidth("65%");

    var imgLink = new ImageLinked(); 
    imgLink.setWidth("25%");
    img.setMargin(Border.ALL, "0px");
    img.setCorner(Border.ALL, "0");
    //imgLink.setMargin(Border.TOP, "20px");
    imgLink.setWaterMark(img.get("fig/common/icons/ext_link.png"));

    var items = []
    items.push(fadeInDelayed.get(imgLink.get("fig/common/icons/email.webp", "mailto:wws.haato@gmail.com")));

    mediaText.setGraphic(merge(items));
    //cols.insert(1, merge(items));

    //mediaText.setTitleColor(229, 49, 76, 1);
    //mediaText.setBodyColor(181, 38, 59, 1);
    //mediaText.setButton("View all", "/#/previous-works");
    //mediaText.setRight();

    

    return mediaText.get();
}


function createSocialMedia(){
    var img = new Image();
    img.setWidth("60%");
    img.setMargin(Border.ALL, "10px");
    img.setMargin(Border.BOTTOM, "0px");
    img.setCircle();
    
    var items = [];
    

    var cols = new InvertableColumn();
    cols.insert(0, fadeInExplosiveDelayed.get(img.get("fig/common/pfp.jpg")));

    var imgLink = new ImageLinked(); 
    imgLink.setWidth("35%");
    img.setMargin(Border.ALL, "0px");
    img.setCorner(Border.ALL, "0");
    imgLink.setMargin(Border.TOP, "20px");
    imgLink.setWaterMark(img.get("fig/common/icons/ext_link.png"));

    items.push(fadeInDelayed.get(imgLink.get("fig/common/icons/email.webp", "mailto:wws.haato@gmail.com")));
    items.push(fadeInDelayed.get(wrapDiv("title", "wws.haato@gmail.com")));
    cols.insert(1, merge(items));
    //cols.setPadding(Border.LEFT, "10px");

    var titledContainer = new TitledContainer();
    titledContainer.setTitle("Email");
    titledContainer.setFontColor(255, 255, 255, 1);
    titledContainer.setTitleColor(70, 132, 219, 1);
    titledContainer.setBodyColor(60, 112, 185, 1);
    titledContainer.setLeft();

    return titledContainer.get(wrapDiv("titled-media-text",
        wrapStyle({width: "80%", marginLeft: "10%"}, cols.get())));
    
}

function createStaffs(){
    var img = new Image();
    img.setWidth("85%");
    img.setCorner(Border.ALL, "10px");

    var mediaText = new TitledMediaText();
    mediaText.setTitle("Social Media");

    //TitledMediaText.setPassage has been deprecated
    //please use TitledMediaText.initFromArticle instead
    //mediaText.setGraphic(img.get("fig/index/GroupPortrait.png"));
    mediaText.initFromArticle(articlesContact.participants);

    mediaText.setFontColor(255, 255, 255, 1);
    mediaText.setTitleColor(229, 49, 76, 1);
    mediaText.setBodyColor(181, 38, 59, 1);
    //mediaText.setButton("Join us!", "/#/current-event");
    mediaText.setRight();

    /*var titledContainer = new TitledContainer();
    titledContainer.setTitle("Staff");
    titledContainer.setFontColor(255, 255, 255,1);
    titledContainer.setTitleColor(229, 49, 76, 1);
    titledContainer.setBodyColor(181, 38, 59, 1);
    titledContainer.setRight();

    var slider = new Slider();
    slider.append(staffInformationZhadar.get());
    slider.append(staffInformationSakazuki.get());
    slider.append(staffInformationAbner.get());
    slider.append(staffInformationIce.get());
    slider.append(staffInformationSaku.get());
    slider.append(staffInformationConkos.get());
    //slider.append(staffInformationLeo.get());
    //slider.append(staffInformationSteve.get());

    slider.setClickWidth("4VW");
    slider.setBarColor(229, 49, 76, 1);
    slider.setDotColor(255,255,255,1);
    slider.setWidth("100%");*/

    return mediaText.get();
    
    //const leftContent = fadeInExplosiveDelayed.get(slider.get());

    //return titledContainer.get(leftContent);
}