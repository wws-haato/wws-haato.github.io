import { Mutex } from "async-mutex";


export class ProtectedArray extends Array{
	constructor(){
		super();
		this.mutex = new Mutex();
	}

	append(item){
		this.mutex.acquire();
		const id = this.length;
		this.push(item);
		this.mutex.runExclusive();

		return id;
	}

}


export class QueryData{
	constructor(effectID){
		this.effectID = effectID;
		this.animated = false;
	}

	getID(){
		return this.effectID;
	}

	isAnimated(){
		return this.animated;
	}

	setAnimated(){
		this.animated = true;
	}

}

export class EntranceEffect{
	static allEffects = new ProtectedArray();
	static allQueries = new ProtectedArray();

	static getUniqueID(id){return "entrance-eff-"+id.toString();}
	static animateQueries(){
		const length = EntranceEffect.allQueries.length;
		for(var i = 0; i < length; i++){
			const query = EntranceEffect.allQueries[i];
			if(query.isAnimated())
				continue;
			
			var elem = document.getElementById(EntranceEffect.getUniqueID(i));
			if(!elem)
				continue;
			
			if(elem.getBoundingClientRect().top < window.innerHeight){
				EntranceEffect.allQueries[i].setAnimated();
				const effect = EntranceEffect.allEffects[query.getID()];
				elem.animate(effect.keyframes, effect.options);
				break;
			}
	
		}

	}

	static stopFlag = false;
	static timer = setInterval(EntranceEffect.animatePrimaryElements, 1);
	static animatePrimaryElements(){
		if(EntranceEffect.stopFlag)
			clearInterval(EntranceEffect.timer);
		else
			EntranceEffect.animateQueries();
	}

	constructor(keyframes, options){
		this.effectID = EntranceEffect.allEffects.append(
			{keyframes: keyframes, options: options});
		
		this.item = 0;
	}

	setItem(item){
		this.item = item;
	}

	get(){
		const queryID = EntranceEffect.allQueries.append(new QueryData(this.effectID));
		const uniqueID = EntranceEffect.getUniqueID(queryID);

		return (<><div id ={uniqueID} className="entrance_block">{this.item}</div></>);
	}
}


document.addEventListener('scroll', function(e){
	EntranceEffect.stopFlag = true;
	EntranceEffect.animateQueries();
		
})