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
          <section className='athlete-profile-top-info'>
            <h1 className='base-font'>
              <strong>{this.state.first_name} {this.state.last_name}</strong>
            </h1>
            <div>
              <p>
                <strong>Baseball</strong>
              </p>
            </div>
            <div className='inline-block outer-right-small outer-bottom-small'>
              <div className='tier-badge tier-silver'>
                <strong>PROFESSIONAL</strong>
              </div>
            </div>
            <div className='inline-block'>
              <div itemprop='aggregateRating' itemscope itemtype='http://schema.org/AggregateRating' className='rating'>
                <div className='inline-block'>
                  <span className='star'>
                    <i className='cu-font-star'></i>
                  </span>
                  <span className='star'>
                    <i className='cu-font-star'></i>
                  </span>
                  <span className='star'>
                    <i className='cu-font-star'></i>
                  </span>
                  <span className='star'>
                    <i className='cu-font-star'></i>
                  </span>
                  <span className='star'>
                    <i className='cu-font-star'></i>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <p itemprop='description' className='outer-box-none'>
          {this.state.bio}
          <a href={this.state.stat_link}>View Players Stats</a>
        </p>
      </section>


      <section className='profile-device-spacing profile-column-2'>
        <section className='align-center message-player-panel profile-section '>
          <h6 className='outer-bottom'> Questions for {this.state.first_name} {this.state.last_name} ?</h6>
          <a className='button button-primary full outer-bottom'>Message Trainer</a>
          <div className='align-center response-rate small'>
            <div className='inline-block'>
              <span className='tooltip-item'>
                <span className='clickable'>Fast Response Rate:</span>
              </span>
              <strong>100%</strong>
            </div>
          </div>
        </section>
        <section className='profile-section'>
          <h6 className='align-center outer-bottom'>Trainer Schedule</h6>
          <section className='border-top'></section>
        </section>
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
