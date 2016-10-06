import React from 'react'
import {Router} from 'react-router'
import io from 'socket.io-client'
import Header from './parts/Header'

class APP extends React.Component {

	constructor() {
		super();
		this.state  = {
			status: 'disconnected',
			title: '',
			member: {},
			audience: [],
			speaker: '',
			questions: [],
			currentQuestion: false,
			results: {}
		}
		this.emit = this.emit.bind(this);
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');

		this.socket.on('connect', () => {
			var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

			if (member && member.type === 'audience') {
				this.emit('join', member);
			} else if (member && member.type === 'speaker') {
				this.emit('start', {name: member.name, title: sessionStorage.title });
			}

			this.setState({ status: 'connected' });
		});

		this.socket.on('disconnect', () => {
			this.setState({ 
				status: 'disconnected', 
				title: 'disconnected',
				speaker: ''
			});
		});

		this.socket.on('welcome', serverState => this.setState(serverState));

		this.socket.on('joined', member =>  {
			sessionStorage.member = JSON.stringify(member);
			this.setState({ member: member });
		});

		this.socket.on('audience', (newAudience) => {
			this.setState({ audience: newAudience });
		});

		this.socket.on('start', (presentation) => {
			if (this.state.member.type === 'speaker') {
				sessionStorage.title = presentation.title;
			}
			this.setState(presentation);
		});

		this.socket.on('end', serverState => this.setState(serverState));

		this.socket.on('ask', (question) => {
			sessionStorage.answer='';
			this.setState({ currentQuestion: question });
		});

		this.socket.on('results', (data) => {
			this.setState({ results: data });
		});

	}

	emit(eventName, payload) {
		this.socket.emit(eventName, payload);
	}

	render() {
		return (
			<div>
				<Header {...this.state} />
				{
					React.cloneElement(this.props.children, {
						title:this.state.title,
						status:this.state.status,
						member:this.state.member,
						audience:this.state.audience,
						speaker:this.state.speaker,
						questions:this.state.questions,
						currentQuestion:this.state.currentQuestion,
						results:this.state.results,
						emit:this.emit
					})
				}
			</div>
		);
	}
}

module.exports = APP;