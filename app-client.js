import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import APP from './components/APP'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
import Whoops404 from './components/Whoops404'

var routes = (
	<Route path="/" component={APP}>
		<IndexRoute component={Audience} />
		<Route name="speaker" path="speaker" component={Speaker}></Route>
		<Route name="board" path="board" component={Board}></Route>
		<Route name="notfound" path="*" component={Whoops404}></Route>
	</Route>
);

ReactDOM.render((
	<Router history={hashHistory}>{routes}</Router>
	), document.getElementById('react-container')
);
