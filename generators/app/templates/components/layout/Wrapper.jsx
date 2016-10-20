import React from 'react';
import Navigation from './Navigation';

const Wrapper = (props) => (
	<div>
		<Navigation />

		<div className="container">
			{props.children}
		</div>
	</div>
);

export default Wrapper;