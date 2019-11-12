import React from 'react';

import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

// handleClick(e) {
//   console.log('clicked athlete', this);
// }

export const Card = (props) => (
<div className='card-container'>
    <img src={props.profile.avatar} alt='profileimage'/>
      <div className='card-info'>
        <h1>{props.profile.first_name} {props.profile.last_name}</h1>
        <h4>MLB Club:{props.profile.mlb_club}</h4>
        <h4>Class:{props.profile.team_class}</h4>
        <h5>Position:{props.profile.position}</h5>
        <Link to={`/profile/detail/${props.profile.id}/`}>
          <Button color='primary' variant='container'>Book a Lesson</Button>
        </Link>
      </div>
  </div>
);
