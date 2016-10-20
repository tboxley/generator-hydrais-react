import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navigation = (props) => {
	return (
		<Navbar staticTop>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <Link to="/">Your Application</Link>
	      </Navbar.Brand>

	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
		    <Nav>
		    	<LinkContainer to="/">
		      	<NavItem>Home</NavItem>
		      </LinkContainer>
		    </Nav>
		  </Navbar.Collapse>
	  </Navbar>
	);
};

export default Navigation;