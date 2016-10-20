import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomePage from './pages/home/HomePage';
import Wrapper from './layout/Wrapper';

const Routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={HomePage} />
		</Route>
	</Router>
);

export default Routes;