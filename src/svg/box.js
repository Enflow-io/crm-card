import React from "react";

const SVG = ({
	             style = {},
	             color = '#fff',
	             width = '32px',
	             className = '',
	             height = '32px',
	             viewBox = '0 0 32 32',
             }) =>
	<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M23.2198 20.3154L21.4272 21.3527V40L37.5683 30.6805V12.0332L23.2198 20.3154Z" fill="white"/>
		<path d="M26.1409 3.59336L19.9334 0L3.34424 9.57676L9.56001 13.1701L26.1409 3.59336Z" fill="white"/>
		<path d="M36.5145 9.57676L29.3609 5.50208L12.78 15.0788L13.7261 15.5685L19.9336 19.1535L26.1078 15.5934L36.5145 9.57676Z" fill="white"/>
		<path d="M11.5268 21.9336L8.55588 20.4067V15.6598L2.4314 12.1328V30.6473L18.4563 39.9004V21.3859L11.5268 17.3942V21.9336Z" fill="white"/>
	</svg>


;

export default SVG;


