import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './layouts/default';
import ToDoList from './routes/root/ToDoList'
import './index.css';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={ToDoList} />
		</Route>
	</Router>,
	document.getElementById('root')
);
