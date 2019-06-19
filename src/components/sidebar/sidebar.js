import React from "react";
import './sidebar.scss'
import './../../w3.scss'
import ComputerIcon from  './../../svg/computer'
import BoxIcon from  './../../svg/box'
import TaskIcon from  './../../svg/TaskIcon'

function Sidebar() {
	return (
		<div className="w3-sidebar  w3-bar-block" style={{width:'100px', backgroundColor: '#333749'}}>
			<div className="sidebar__logo">
				<img src={"/woman.jpg"} />
			</div>
			<a href="#" className="w3-bar-item w3-button"><ComputerIcon /><span>Рабочий стол</span></a>
			<a href="#" className="w3-bar-item w3-button"><BoxIcon /><span>Заказы</span></a>
			<a href="#" className="w3-bar-item w3-button"><TaskIcon /><span>Задачи</span></a>
		</div>
	);
}

export default Sidebar;
