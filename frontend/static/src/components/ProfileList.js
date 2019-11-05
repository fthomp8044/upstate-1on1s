import React, { Component } from 'react';
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {

    axios.get('/api/v1/user/profile/')
    .then(res => {
        console.log('res', res.data);
        this.setState({profiles: res.data});

    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {

    let profiles = this.state.profiles.map(profile => (
    <ul>
      <li key={profile.id}><img src={profile.avatar} alt='profileimage'/></li>
      <li key={profile.id}><p>{profile.user}</p></li>
    </ul>
    ));

    return (

      <div className='Profilelist'>
        <h1>Profilelist</h1>
        {profiles}
      </div>

    )
  }
}

export default ProfileList;
