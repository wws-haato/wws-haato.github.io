import "../css/navbar.css";
import Image from "./Image";
import {NavLink} from "react-router-dom";


export const NavbarDropdown = () =>{
	var img = new Image();
	img.setWidth("60px");

	return(
		<>
		<nav className="dropdown">
			<button className="dropbtn" onClick={expandDropdown}>
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

export function expandDropdown() {
	document.getElementById("nav_dropdown").classList.toggle("show");
}

window.onclick = function(event){
	if(event.target.matches(".centered_img"))
		return;

	for(let drop of document.getElementsByClassName("dropdown-content"))
		if(drop.classList.contains("show"))
			drop.classList.remove("show");
		
}