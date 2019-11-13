import React from 'react';

import { Card } from './Card';
import './CardList.css';

export const CardList = (props) => {
  console.log('props', props)
  let profiles = props.profiles.map(profile => (
    <Card key={profile.id} profile={profile} />
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
