import React, { Component } from 'react';
import axios from "axios";

import { CardList } from './CardList';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      lessons: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if(this.props.match.params.lesson !== undefined) {
      let selection = this.props.match.params.lesson.toUpperCase() ;
      axios.get(`/api/v1/profile/${selection}/`)
      .then(res => {
          console.log('res', res.data);
          this.setState({profiles: res.data});

      })
      .catch(error => {
          console.log(error);
      });
    } else {
      axios.get(`/api/v1/profile/`)
      .then(res => {
          console.log('res', res.data);
          this.setState({profiles: res.data});

      })
      .catch(error => {
          console.log(error);
      });
    }
  }
  handleClick(e) {
    console.log('athlete clicked');
  }


// cardlist component  is repsonsible of creating the users. not how it looks.
  render() {
    return (
      <div align='center'>
        <h1 className='card-list-title' align='center'>Pick Your Athlete</h1>
          <CardList name='card-list' profiles={this.state.profiles}  />
      </div>
    )
  }
}

export default ProfileList;
