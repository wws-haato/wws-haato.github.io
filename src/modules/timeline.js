import "../css/timeline.css";
import { wrapDiv, wrapDivRecursive } from "../utils";
import { fadeIn, fadeInExplosiveDelayed, fadeInExplosive} from "./defaults/entrance_effect";

export default class TimeLine extends Array{
    static toMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    static getTitle(title){
        return fadeInExplosive.get(wrapDiv("timeline-banner", title));
    }

    constructor(json){
        super();
		const timeline = json.timeline.sort(function(a, b){
            var toNumber = function(date){
                return (date.year*13+date.month)*32+date.day;
            };
            return toNumber(a.date) - toNumber(b.date);
        });

        for(let event of timeline){
            var obj = {};
            obj.date = event.date.day.toString()+"th ";
            obj.date+=TimeLine.toMonth[event.date.month-1]+". "+event.date.year;
            obj.title = event.title;

            obj.passage = "";
            for(let sentence of event.passages)
                obj.passage+=sentence;
            
            
            this.push(obj);
        }
		
	}

    get(){
        var events = [];
        var args = ["container ", "", "content"];
        for(var i = 0; i < this.length; i++){
            args[1] = i%2==0? "left":"right";
            
            var content = [];
            content.push(fadeIn.get(wrapDiv("date", this.at(i).date)));
            content.push(fadeIn.get(wrapDiv("title", this.at(i).title)));
            content.push(fadeInExplosiveDelayed.get(wrapDiv("passage", this.at(i).passage)));
            events.push(wrapDivRecursive(args, content));
        }

        return wrapDiv("timeline", events);
    }
}