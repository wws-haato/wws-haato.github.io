import { EntranceEffect } from "../entrance_effect";


export var fixedFadeFixed = new EntranceEffect(
	[ {opacity: 0}, { opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out'}
);


export var fadeInRightwards = new EntranceEffect(
	[ { transform: 'translateX(-50%)', opacity: 0}, { transform: 'translateX(0px)', opacity: 1}], 
	{ duration: 1000, fill: 'forwards'}
);

export var fadeInRightwardsDelayed = new EntranceEffect(
	[ { transform: 'translateX(-50%)', opacity: 0}, { transform: 'translateX(0px)', opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out', delay: 300}
);

export var fadeInRightwardsLatched = new EntranceEffect(
	[ { transform: 'translateX(-50%)', opacity: 0}, { transform: 'translateX(0px)', opacity: 1}], 
	{ duration: 1000, fill: 'forwards', easing: 'ease-out', delay: 650}
);



export var fadeInUpwardsDelayed = new EntranceEffect(
	[ { transform: 'translateY(50%)', opacity: 0}, { transform: 'translateY(0px)', opacity: 1}], 
	{ duration: 800, fill: 'forwards', easing: 'ease-out', delay: 300}
);


export var fadeInExplosive = new EntranceEffect(
	[ { transform: 'scale(0.5, 0.5)', opacity: 0}, { transform: 'scale(1, 1)', opacity: 1}], 
	{ duration:600, fill: 'forwards', easing: 'ease-in'}
);

export var fadeInExplosiveDelayed = new EntranceEffect(
	[ { transform: 'scale(0.5, 0.5)', opacity: 0}, { transform: 'scale(1, 1)', opacity: 1}], 
	{ duration:600, fill: 'forwards', easing: 'ease-in', delay: 300}
);
