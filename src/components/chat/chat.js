import React from 'react';
import './chat.scss'
import Separator from './Separator'
import Message from './message/message'

function Chat() {
	return (
		<div className="chat">

			<div className={"chat__messages"}>
				<Separator />
				<Message text={'Hi!'} />
				<Message text={'Hello!'} answer />
				<Separator />
				<Message text={'How are u?'} />
				<Separator />
				<Message text={'Nice!'}  answer />
				<Message text={'Ready?'} answer />
			</div>
			<div className="chat__send-msg send-form">
				<div className={"send-form__label"}> <a href='mailto:konstantin@enflow.io'>E-mail</a> для Елена Иванова
					{'<'}konstantin@enflow.io>
				</div>
				<textarea placeholder={'текст сообщения'} className={"send-form__input"} />
			</div>
		</div>
	);
}

export default Chat;
