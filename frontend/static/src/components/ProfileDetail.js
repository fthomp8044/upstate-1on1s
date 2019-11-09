import React, {Component} from 'react';
import axios from "axios";

import {Link} from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

componentDidMount() {
  axios.get(`/api/v1/profile/${this.props.match.params.id}/`)
  .then(res => {
      console.log('res', res.data);
      this.setState(res.data);

  })
  .catch(error => {
      console.log(error);
  });
}



  render() {

  return (
    <div className = "col-md-6">
      <section className = 'container public-profile-main-content'>
        <div className='clearfix'>
          <section class='athlete-profile-main-profile-photo'>
            <img src={this.state.avatar} alt='profileimage'/>
          </section>
        </div>
      </section>
      <Link to='/checkout/'>
        <button className='checkout-button'>
          Checkout
        </button>
      </Link>
    </div>)
    }
}

export default ProfileDetail;
