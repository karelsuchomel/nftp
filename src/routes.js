import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';
import Home from './components/home/Home';

export default (
	<Router>
		<Route path="/" component={ App } />
	</Router>
);