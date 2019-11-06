import React from 'react';

import { Card } from './Card';

export const CardList = (props) => {
  console.log('props', props)
  let profiles = props.profiles.map(profile => (
    <React.Fragment>
      <Card key={profile.id} profile={profile}/><img src={profile.avatar} alt='profileimage'/>
      <p>{profile.position}</p>
    </React.Fragment>
  ))
  return (
    <div className='card-list'>
      {profiles}
    </div>
  )
  // <div className='card-list'>
  //   let profiles = props.profiles.map(profile => (
  //   <ul>
  //     <Card key={profile.id} profile={profile} /><img src={profile.avatar} alt='profileimage'/>
  //     <li key={props.profile.id}><p>{props.profile.user}</p></li>
  //   </ul>
  //   ))}
  // </div>
};
