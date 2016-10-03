var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var hashHistory = ReactRouter.hashHistory;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
	<Route path="/" component={APP}>
		<IndexRoute component={Audience} />
		<Route name="speaker" path="speaker" component={Speaker}></Route>
		<Route name="board" path="board" component={Board}></Route>
	</Route>
);

ReactDOM.render((
	<Router history={hashHistory}>{routes}</Router>
	), document.getElementById('react-container')
);
