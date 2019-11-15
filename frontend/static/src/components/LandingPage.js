import React from "react";


import {Dropdown, DropdownButton} from 'react-bootstrap'

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
            <h1 className='landing-page-title'>Upstate 1 on 1's</h1>
            <h3>Train with The Upstate's Finest</h3>
            <hr className='horizontal-line-title'/>
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
