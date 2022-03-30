import { Mutex } from "async-mutex";
import { scrolledIntoView } from "../utils";


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


export class EntranceEffect{
	static idMutex = new Mutex();
	static uid = 0;
	static allEffects = new ProtectedArray();
	static PRIMARY = 1;
	static SCROLL = 0;
	static allQueries = [new Map(), new Map()];

	static stopFlag = false;
	static stopMutices = [new Mutex(), new Mutex()];

	static stopAllRequest(){
		EntranceEffect.stopFlag = true;

		//wait until callback ended
		EntranceEffect.stopMutices[1].acquire();
		EntranceEffect.stopMutices[0].acquire();

		EntranceEffect.allQueries[1].clear();
		EntranceEffect.allQueries[0].clear();

		EntranceEffect.stopMutices[1].runExclusive();
		EntranceEffect.stopMutices[0].runExclusive();

	}

	static startAllRequest(){
		EntranceEffect.stopFlag = false;
	}

	static debug(){
		console.log("primary:\t"+EntranceEffect.allQueries[1].size.toString());
		console.log("scroll:\t"+EntranceEffect.allQueries[0].size.toString());
	}

	static getUniqueId(){
        EntranceEffect.idMutex.acquire();
        const uid = EntranceEffect.uid++;
        EntranceEffect.idMutex.runExclusive();
        return "entrance-query-"+uid.toString();
    }

	
	static timers = [
		setInterval(timerCallBack, 1, 0), 
		setInterval(timerCallBack, 1, 1) 
	];
	
	constructor(keyframes, options){
		this.effectID = EntranceEffect.allEffects.append(
			{keyframes: keyframes, options: options});
		
	}

	get(... args){
		if(args.length == 1)
			args.push(0);
			
		const uid = EntranceEffect.getUniqueId();
		EntranceEffect.allQueries[args[1]].set(uid, this.effectID);

		const initStyle = EntranceEffect.allEffects[this.effectID].keyframes[0];
		return <div id ={uid} className="entrance-block" style={initStyle}>{args[0]}</div>;
	}
}


function timerCallBack(isPrimary){
	console.log('aaaa1');
	EntranceEffect.stopMutices[isPrimary].acquire();
	console.log('aaaa2');
	for(let [uid, effID] of EntranceEffect.allQueries[isPrimary]){
		console.log('sss');
		if(EntranceEffect.stopFlag)
			break;

		console.log('c');
		var elem = document.getElementById(uid);
		if(!elem)
			continue;

		console.log('bbb');
		if(isPrimary || scrolledIntoView(elem)){
			console.log('aaa');
			let effect = EntranceEffect.allEffects[effID];
			elem.animate(effect.keyframes, effect.options);
			EntranceEffect.allQueries[isPrimary].delete(uid);
		}

	}
	console.log('aaaa3');
	EntranceEffect.stopMutices[isPrimary].runExclusive();
	console.log('aaaa4');
}
