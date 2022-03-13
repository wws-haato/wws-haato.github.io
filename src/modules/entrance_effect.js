import { Mutex } from "async-mutex";


export class EntranceEffect{
	static idToAnime = [];
	static animeMutex = new Mutex();

	/**
	* @param {number} uid get the stringed uid
	*/
	static getID(uid){
		return "entrance-effect-uid-"+uid.toString();
	}

	static getAllAnimes(){
		var arr = [];
		const len = EntranceEffect.idToAnime.length;
		for(var i = 0; i < len; i++)
			arr.push(EntranceEffect.idToAnime[i]);

		return arr;
	}

	constructor(anime){
		this.anime = anime;
		this.item = 0;
	}

	setItem(item){
		this.item = item;
	}

	get(){
		EntranceEffect.animeMutex.acquire();
		const id = EntranceEffect.getID(EntranceEffect.idToAnime.length);
		EntranceEffect.idToAnime.push(this.anime);
		EntranceEffect.animeMutex.runExclusive();

		return (<><div id ={id} className="entrance_block">{this.item}</div></>);
	}
}


document.addEventListener('scroll', function(e){
	const allAnimes = EntranceEffect.getAllAnimes();
	for(var id = 0; id < allAnimes.length; id++){
		const uid = EntranceEffect.getID(id);
		var element = document.getElementById(uid);
		if(element){
			element.animate(
				[ {opacity: 0}, { opacity: 1}], 
				{ duration: 3000, fill: 'forwards' }
			);
		}
			

	}
		
}
)