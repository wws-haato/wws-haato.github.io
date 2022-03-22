import "../css/navbar.css";
import Image from "./Image";
import {NavLink} from "react-router-dom";
import ColourRGBA from "./config/colour_rgba";


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
				<NavLink to="/previous-works" activeStyle>
					<div className="button">Previous Works</div>
				</NavLink>
			</div>
		</nav>
		</>
	);
}

function createNavbarKeyFrames(resolution){
	var keyframes = [];
	var skyBlue = new ColourRGBA(165, 42, 42,1);
	for(var i = 0; i < resolution; ++i){
		skyBlue.setA(i/resolution);
		keyframes.push({background: ColourRGBA.getGradient(
			"90deg", [0, 100], [skyBlue, skyBlue])});
	}
		
	const royalBlue = new ColourRGBA(65,105,255,1);
	resolution*=3;
	const increment = royalBlue.substract(skyBlue).divide(resolution);
	for(var i = 0; i < resolution; ++i){
		skyBlue = skyBlue.add(increment);
		keyframes.push({background: ColourRGBA.getGradient(
			"90deg", [0, 100.0*i/resolution], [royalBlue, skyBlue])});
	}
		
		
	return keyframes;
}

const keyframes = createNavbarKeyFrames(200);
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
