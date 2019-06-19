import React from 'react';
import './header.scss'

function Header() {
	return (
		<div className="header">
			<div className="header__breadcrumbs">
				<span>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.236572 7.5L7.61508 0.121495L8.72185 1.22827L2.45012 7.5L8.72185 13.7717L7.61508 14.8785L0.236572 7.5Z" fill="#2749F1"/></svg>
				</span>Заказ #32192</div>


			<div className="header__pretitle">Заказчик: <a href="#">ОАО "Йогурт и Ко"</a> </div>

			<div className="header__title">Маршрут еще не задан</div>
			<div className="header__posttitle">Послезавтра, чтв 28 марта 2019, 12:00
			</div>


		</div>
	);
}

export default Header;
