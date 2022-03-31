import { Mutex } from "async-mutex";
import { merge, wrapDiv, wrapDivStyled } from "../utils";
import UniqueIDGenerator, { UniqueIDMap } from "./unique_id_generator";
import "../css/language_toggle.css"
import { fadeIn } from "./defaults/entrance_effect";

export default class LanguageSwitch{
    static ENGLISH = 0;
    static JAPANESE = 1;
    static currLanguage = LanguageSwitch.ENGLISH;

    static uidGen = new UniqueIDGenerator("langauge-switch");
    static uidArray = [];
    constructor(textObj){
        if(!textObj.en)
            textObj.en = "en lost";
        if(!textObj.jp)
            textObj.jp = "[jp lost] "+textObj.en;

        this.items = [textObj.en, textObj.jp];
    }

    static uidArrayMutex = new Mutex();
    get(){
        var uids = [];
        uids.push(LanguageSwitch.uidGen.generateUniqueID());
        uids.push(LanguageSwitch.uidGen.generateUniqueID());

        const items = this.items.map(function(x, i){
            const args = {
                id: uids[i],
                style: {display: i==LanguageSwitch.currLanguage? "block": "none"}, 
            }

            return wrapDiv(args, x);
        });

        LanguageSwitch.uidArrayMutex.acquire();
        LanguageSwitch.uidArray.push(uids);
        LanguageSwitch.uidArrayMutex.runExclusive();
        return wrapDiv("", items);
    }

    static resetFlag = false;
    static buttonUids = ["toggle-button-en", "toggle-button-jp"];
    static toggleLanguage(){
        LanguageSwitch.currLanguage = 1-LanguageSwitch.currLanguage;
        let elems = LanguageSwitch.buttonUids.map(function(x){
            return document.getElementById(x);});
        
        if(elems[0] && elems[1]){
            elems[LanguageSwitch.currLanguage].style.display = "block";
            elems[1-LanguageSwitch.currLanguage].style.display = "none";
        }

        LanguageSwitch.uidArrayMutex.acquire();
        for(let uids of LanguageSwitch.uidArray){
            if(LanguageSwitch.resetFlag)
                break;

            let elems = uids.map(function(x){
                return document.getElementById(x);});
            
            if(!elems[0] || !elems[1])
                continue;
            
            elems[LanguageSwitch.currLanguage].style.display = "block";
            elems[1-LanguageSwitch.currLanguage].style.display = "none";
        }
        LanguageSwitch.uidArrayMutex.runExclusive();
    }

    static createToggle(){
        LanguageSwitch.resetFlag = true;

        LanguageSwitch.uidArrayMutex.acquire();
        LanguageSwitch.resetFlag = false;
        LanguageSwitch.uidArray = [];
        LanguageSwitch.uidArrayMutex.runExclusive();

        const buttons = LanguageSwitch.buttonUids.map(
            function(x, i){
                const args = {
                    id: x,
                    className:"toggle-container", 
                    style: {display: i==LanguageSwitch.currLanguage? "block": "none"}, 
                }

                return wrapDiv(args, i? "🇺🇸English": "🇯🇵Japanese");
            }
        );

        return <div className="toggle" 
            onClick={LanguageSwitch.toggleLanguage}> {buttons} </div>;

    }
}