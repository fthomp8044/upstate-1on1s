import React, {Component} from "react";
import {NavDropdown,Dropdown, DropdownButton, Navbar, Nav, Form} from 'react-bootstrap'

class NavBar extends Component {

  render() {
    let selectLesson = (e) => {
      this.state.push(`/profile/list/${e.target.value}`);
    }

    return (
      <div className='navigation-bar'>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Upstate 1 on 1s</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profile/edit/">Profile</Nav.Link>
              <Nav.Link href="/profile/list/:lessons">Our Athletes</Nav.Link>
              <NavDropdown title="Lessons" id="basic-nav-dropdown">
                <NavDropdown.Item as='button' onClick={selectLesson} value='hitting'>Hitting</NavDropdown.Item>
                <NavDropdown.Item as='button' onClick={selectLesson} value='pitching'>Pitching</NavDropdown.Item>
                <NavDropdown.Item as='button' onClick={selectLesson} value='fielding'>Fielding</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">logout</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  }

export default NavBar;
