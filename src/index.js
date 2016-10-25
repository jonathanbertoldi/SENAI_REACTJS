import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound'
import Layout from './layouts/default'
//import Teste from './Teste';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Layout}>
  		<IndexRoute component={App}/>
  		<Route path="naoencontrei" component={NotFound} />
  	</Route>
  </Router>,
  document.getElementById('root')
);

/* 
ReactDOM.render(
	*componente do react que vai renderizar*, 
	*em qual tag eu vou injetar o componente*
)
*/