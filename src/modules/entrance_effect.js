import { Mutex } from "async-mutex";


export class EntranceEffect{
	static idToAnime = [];
	static animeMutex = new Mutex();
	static hasBeenAnimated = [];

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
		EntranceEffect.hasBeenAnimated.push(false);
		EntranceEffect.animeMutex.runExclusive();

		return (<><div id ={id} className="entrance_block">{this.item}</div></>);
	}
}


document.addEventListener('scroll', function(e){
	const allAnimes = EntranceEffect.getAllAnimes();
	for(var id = 0; id < allAnimes.length; id++){
		if(EntranceEffect.hasBeenAnimated[id])
			continue;

		var element = document.getElementById(EntranceEffect.getID(id));
		if(!element)
			continue;
		
		if(element.getBoundingClientRect().top < window.innerHeight){
			element.style.display = "block";
			EntranceEffect.hasBeenAnimated[id] = true;
			element.animate(
				[ {opacity: 0}, { opacity: 1}], 
				{ duration: 1000, fill: 'forwards' }
			);
		}
		
			

	}
		
}
)