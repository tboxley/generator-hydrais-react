import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './layout/Main';
import Wrapper from './layout/Wrapper';

const Routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={Main} />
		</Route>
	</Router>
);

export default Routes;