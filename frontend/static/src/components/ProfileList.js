import React, { Component } from 'react';
import axios from "axios";

import { CardList } from './CardList';

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

    axios.get('/api/v1/profile/')
    .then(res => {
        console.log('res', res.data);
        this.setState({profiles: res.data});

    })
    .catch(error => {
        console.log(error);
    });
  }
// cardlist component  is repsonsible of creating the users. not how it looks.
  render() {
    return (
      <div className='Profilelist'>
        <h1>Profilelist</h1>
        <CardList name='card-list' profiles={this.state.profiles} />
      </div>

    )
  }
}

export default ProfileList;
