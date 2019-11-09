import React from 'react';

// handleClick(e) {
//   console.log('clicked athlete', this);
// }

export const Card = (props) => (
<div className='card-container'>
    <img src={props.profile.avatar} alt='profileimage'/>
      <div className='card-info'>
        <h1>{props.profile.first_name} {props.profile.last_name}</h1>
        <h3>Position:{props.profile.position}</h3>
        <h4>Specialty:{props.profile.specialty}</h4>
        <a href={`/profile/detail/${props.profile.id}/`}>Book A Lesson</a>
      </div>
  </div>
);
