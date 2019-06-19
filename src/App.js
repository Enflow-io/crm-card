import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import './w3.scss';


import Sidebar from './components/sidebar/sidebar'
import Chat from './components/chat/chat'
import Content from './components/content/content'

function App() {
	return (
		<div>

			<Sidebar/>
			<logo />
			<div className="card">
				<div className="card__column">
					<Content />
				</div>
				<div className="card__column card__column--chat">
					<Chat />
				</div>
			</div>
		</div>
	);
}

export default App;
