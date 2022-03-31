import { Mutex } from "async-mutex";
import { merge, wrapDiv, wrapDivStyled } from "../utils";
import UniqueIDGenerator, { UniqueIDMap } from "./unique_id_generator";
import "../css/language_toggle.css"

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
        return wrapDiv("switchable-language", items);
    }

    static resetFlag = false;
    static toggleLanguage(){
        console.log("toggled!");
        LanguageSwitch.currLanguage = 1-LanguageSwitch.currLanguage;
        LanguageSwitch.uidArrayMutex.acquire();
        for(let uids of LanguageSwitch.uidArray){
            console.log(uids);
            if(LanguageSwitch.resetFlag)
                break;

            console.log("toggled 2");
            let elems = uids.map(function(x){
                return document.getElementById(x);});
            
            console.log("toggled 3");
            if(!elems[0] || !elems[1])
                continue;
            
            console.log("toggled 4");
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

        return <div className="toggle-container" onClick={LanguageSwitch.toggleLanguage}> {
            LanguageSwitch.currLanguage ? "English": "Japanese"} </div>;

    }
}