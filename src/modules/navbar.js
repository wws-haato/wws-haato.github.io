import "../css/navbar.css";
import Image from "./Image";
import {NavLink} from "react-router-dom";


export const NavbarDropdown = () =>{
	var img = new Image();
	img.setWidth("60px");

	return(
		<>
		<nav id = "top_bar" className="dropdown">
			<button id = "menu_icon" className="dropbtn">
				{img.get("fig/common/menu.png")}
			</button>
			<div id="nav_dropdown" className="dropdown-content">
				<NavLink to="/" activeStyle>
					<div className="button">Home</div>
				</NavLink>
				<NavLink to="/about" activeStyle>
					<div className="button">About</div>
				</NavLink>
				<a href="#"><div className="button">Contact</div></a>
			</div>
		</nav>
		</>
	);
}

class ColourRGBA{
	/**
	* @param {number} r
	* @param {number} g
	* @param {number} b
	* @param {number} a
	*/
	constructor(r, g, b, a){
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	get(){
		return "rgba(".concat(this.r,',',this.g,',',this.b,',',this.a,')');
	}

	/**
	* @param {ColourRGBA} rgba 
	*/
	substract(rgba){
		return new ColourRGBA(this.r-rgba.r,this.g-rgba.g,this.b-rgba.b,this.a-rgba.a);
	}
	/**
	* @param {ColourRGBA} rgba 
	*/
	add(rgba){
		return new ColourRGBA(this.r+rgba.r,this.g+rgba.g,this.b+rgba.b,this.a+rgba.a);
	}
	/**
	* @param {number} x 
	*/
	multiply(x){
		return new ColourRGBA(this.r*x,this.g*x,this.b*x,this.a*x);
	}
	/**
	* @param {number} x 
	*/
	divide(x){
		return this.multiply(1/x);
	}
	/**
	* @param {number} a
	*/
	setA(a){
		return this.a = a;
	}
}

function createNavbarKeyFrames(resolution){
	var keyframes = [];
	var skyBlue = new ColourRGBA(135,206,235,1);
	for(var i = 0; i < resolution; ++i){
		skyBlue.setA(i/resolution);
		keyframes.push({background: "linear-gradient(90deg,"+skyBlue.get()+"0%,"+skyBlue.get()+"100%)"});
	}
		
	const royalBlue = new ColourRGBA(65,105,255,1);
	resolution*=3;
	const increment = royalBlue.substract(skyBlue).divide(resolution);
	const preffix = "linear-gradient(90deg,"+royalBlue.get()+"0%,";
	for(var i = 0; i < resolution; ++i){
		skyBlue = skyBlue.add(increment);
		keyframes.push({background: preffix+skyBlue.get()+(100.0*i/resolution).toString()+"%)"});
	}
		
		
	//keyframes.push({background: royalBlue.get()});
	return keyframes;
}

const keyframes = createNavbarKeyFrames(200);
console.log(keyframes);
const invKeyframes = createNavbarKeyFrames(200).reverse();

var navbarExpanded = false;

/**
* @param {MouseEvent} event the event
*/
export function toggleNavbar(event) {
	if(!navbarExpanded && !document.getElementById('menu_icon').contains(event.target))
		return;
	
	var topBar = document.getElementById("top_bar");
	if(!navbarExpanded)
		topBar.animate(keyframes, { duration: 800, fill: 'forwards', easing: 'ease-out'});
	else
		topBar.animate(invKeyframes, { duration: 800, fill: 'forwards', easing: 'ease-in'});

	navbarExpanded = !navbarExpanded;
	document.getElementById("nav_dropdown").classList.toggle("show");
	
}
window.onclick = toggleNavbar;
