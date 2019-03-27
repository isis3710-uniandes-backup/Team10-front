import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		return (
			<div>
				<Navbar color="danger" expand="md">
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="mr-auto" navbar>
		              <NavItem>
		                <Link to={'/categories'} className="nav-link text-white">Categories</Link>
		              </NavItem>
		              <NavItem>
		                <Link to={'/'} className="nav-link text-white">Restaurants</Link>
		              </NavItem>
		              <NavItem>
		                <Link to={'/promotions'} className="nav-link text-white">Promotions</Link>
		              </NavItem>
		              <NavItem>
		                <Link to={'/new'} className="nav-link text-white">New restaurants</Link>
		              </NavItem>
		              <NavItem>
		                <Link to={'/you'} className="nav-link text-white">Account</Link>
		              </NavItem>
		            </Nav>
		          </Collapse>
		        </Navbar>
			</div>
		);
	}
}
