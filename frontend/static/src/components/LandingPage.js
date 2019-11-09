import React from "react";


import {NavDropdown,Dropdown, DropdownButton, Navbar, Nav, Form} from 'react-bootstrap'

function LandingPage(props) {

  let selectLesson = (e) => {
    props.history.push(`/profile/list/${e.target.value}`);


  }

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
          <Nav.Link href="/profile/list/:lessons">Pick your Athlete</Nav.Link>
          <NavDropdown title="Lessons" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div id='content'>
            <h1>1on1s</h1>
            <h3>Train with The Upstates Finest</h3>
            <hr />
              <DropdownButton id="dropdown-item-button" title="Pick Your Lesson" variant='outline-success' className='btn btn-default btn-lg' >
                <Dropdown.Item as='button' onClick={selectLesson} value='pitching'>Pitching</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='hitting' >Hitting</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='fielding'>Fielding</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='fundamentals'>Fundamentals</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='Conditioning'>Conditioning Training</Dropdown.Item>
              </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  </div>
// </body>
  )
}

export default LandingPage;
