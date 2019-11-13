import React from "react";


import {NavDropdown,Dropdown, DropdownButton, Navbar, Nav, Form} from 'react-bootstrap'

function LandingPage(props) {

  let selectLesson = (e) => {
    props.history.push(`/profile/list/${e.target.value}`);


  }

  return(
// <body id='landing-page-body'>

    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div id='content'>
            <h1>Upstate 1 on 1s</h1>
            <h3>Train with The Upstates Finest</h3>
            <hr />
              <DropdownButton id="dropdown-item-button" title="Pick Your Lesson" variant='outline-success' className='btn btn-default btn-lg' >
                <Dropdown.Item as='button' onClick={selectLesson} value='pitching'>Pitching</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='hitting' >Hitting</Dropdown.Item>
                <Dropdown.Item as='button' onClick={selectLesson} value='fielding'>Fielding</Dropdown.Item>
              </DropdownButton>
          </div>
        </div>
      </div>
    </div>

// </body>
  )
}

export default LandingPage;
