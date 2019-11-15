import React, {Component} from "react";
import {NavDropdown,Dropdown, DropdownItem, DropdownButton, Navbar, Nav, Form} from 'react-bootstrap'

import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: null
    }

  }

  logOutUser(e) {
    localStorage.clear();
    this.history.push('/home/')

  };


  render() {


    let appUser = JSON.parse(localStorage.getItem('my-app-user'));
    console.log('here', appUser);


    return (
      <div className='navigation-bar'>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Upstate 1 on 1's</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/profile/list/">Our Athletes</Nav.Link>
              <NavDropdown title="Lessons" id="basic-nav-dropdown">
                <DropdownItem tag="a" href="/profile/list/hitting">Hitting</DropdownItem>
                <DropdownItem tag="a" href="/profile/list/pitching">Pitching</DropdownItem>
                <DropdownItem tag="a" href="/profile/list/fielding">Fielding</DropdownItem>
              </NavDropdown>
            </Nav>
            <Form inline>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/logout" onClick={this.logOutUser}>logout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/profile/edit/">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item><p>{appUser ? appUser.username : null}</p></NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  }

export default withRouter(NavBar);
