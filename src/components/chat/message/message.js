import React from 'react';
import './message.scss'

function Message(props) {
	return (
		<div>
			<div className={`message ${props.answer ? 'message--answer' : ''}`}>
				<div className='message-text'>{props.text}</div>
				<div className='message-date'></div>
			</div>
		</div>
	);
}

export default Message;
