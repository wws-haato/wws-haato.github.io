import { Mutex } from "async-mutex";


/** internal stuff**/

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

	static getUniqueID(id){
		return "entrance-eff-"+id.toString();
	}

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
	static timer = setInterval(EntranceEffect.animatePrimaryElements, 0.1);
	static animatePrimaryElements(){
		if(EntranceEffect.stopFlag)
			clearInterval(EntranceEffect.timer);
		else
			EntranceEffect.animateQueries();
	}

	constructor(keyframes, options){
		this.effectID = EntranceEffect.allEffects.append(
			{keyframes: keyframes, options: options});
		
	}

	get(item){
		const queryID = EntranceEffect.allQueries.append(new QueryData(this.effectID));
		const uniqueID = EntranceEffect.getUniqueID(queryID);

		const initStyle = EntranceEffect.allEffects[this.effectID].keyframes[0];
		return (<><div id ={uniqueID} className="entrance_block" style={initStyle}>{item}</div></>);
	}
}


document.addEventListener('scroll', function(e){
	EntranceEffect.stopFlag = true;
	EntranceEffect.animateQueries();
		
})


document.addEventListener('click', function(event){
	if(!event.target.matches(".button"))
		return;

	EntranceEffect.stopFlag = false;
	EntranceEffect.timer = setInterval(EntranceEffect.animatePrimaryElements, 0.1);
})


export var fixedFadeinEntraceEffect = new EntranceEffect(
	[ {opacity: 0}, { opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out'}
);

export var fadeInRightWardsEntraceEffect = new EntranceEffect(
	[ { transform: 'translateX(-100%)', opacity: 0}, { transform: 'translateX(0px)', opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out', delay: 850}
);

export var delayedFadeInRightwards650 = new EntranceEffect(
	[ { transform: 'translateX(-50%)', opacity: 0}, { transform: 'translateX(0px)', opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out', delay: 650}
);


export var fadeInUpwards300 = new EntranceEffect(
	[ { transform: 'translateY(50%)', opacity: 0}, { transform: 'translateY(0px)', opacity: 1}], 
	{ duration: 800, fill: 'forwards', easing: 'ease-out', delay: 300}
);

export var explosiveFadeIn = new EntranceEffect(
	[ { transform: 'scale(0.5, 0.5)', opacity: 0}, { transform: 'scale(1, 1)', opacity: 1}], 
	{ duration:600, fill: 'forwards', easing: 'ease-in'}
);


export var delayedExplosiveFadeIn300 = new EntranceEffect(
	[ { transform: 'scale(0.5, 0.5)', opacity: 0}, { transform: 'scale(1, 1)', opacity: 1}], 
	{ duration:600, fill: 'forwards', easing: 'ease-in', delay: 300}
);

