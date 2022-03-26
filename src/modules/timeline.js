
export default class TimeLine extends Array{
    static toMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
		
        console.log(this);
	}
}