import React from "react";


import {NavDropdown, Navbar, Nav, Form, Button} from 'react-bootstrap'
function LandingPage(props) {
  return(
// <body id='landing-page-body'>
  <div className='container'>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">1on1s</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile/edit/">Profile</Nav.Link>
          <NavDropdown title="Lessons" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div id='content'>
            <h1>1on1s</h1>
            <h3>Train with The Upstates Finest</h3>
            <hr />
            <Button variant="outline-success" className='btn btn-default btn-lg' href='/home'>Get Started!</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
// </body>
  )
}

export default LandingPage;
