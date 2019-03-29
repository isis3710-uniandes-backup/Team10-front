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
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle_menu = this.toggle_menu.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    onClick = (str)=>{
        return (e)=> {this.props.onClick(str)}
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggle_menu() {
        this.setState(prevState => ({
                dropdownOpen: !this.state.dropdownOpen
            }));
    }
    render() {
        return (
                <div>
                    <Navbar color="dark" dark expand="md">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle_menu}>
                                        <DropdownToggle caret>
                                            Categories
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick = {this.onClick('Fast food')}>Fast food</DropdownItem>
                                            <DropdownItem onClick = {this.onClick('Maxican')}>Mexican</DropdownItem>
                                            <DropdownItem onClick = {this.onClick('Chinese')}>Chinese</DropdownItem>
                                            <DropdownItem onClick = {this.onClick('Typical')}>Typical</DropdownItem>
                                            <DropdownItem onClick = {this.onClick('Fancy')}>Fancy</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <Link to={'/'} className="nav-link text-white">Restaurants</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={'/discounts'} className="nav-link text-white">Discounts</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={'/new'} className="nav-link text-white">New restaurants</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                );
    }
}
