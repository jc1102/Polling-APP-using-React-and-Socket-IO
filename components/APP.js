var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var io = require('socket.io-client');
var Header =  require('./parts/Header');

var APP = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: ''
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect',this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome',this.welcome);
	},

	connect() {
		this.setState({ status: 'connected' });
	},

	disconnect() {
		this.setState({ status: 'disconnected' });
	},

	welcome(serverState) {
		this.setState({ title: serverState.title });
	},

	render() {
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
				{this.props.children}
			</div>
		);
	}
});

module.exports = APP;