import React, {Component} from 'react';
import axios from "axios";

import Button from '@material-ui/core/Button';

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
    <div className="col-lg-12 profile-content">
      <section className ='container public-profile-main-content'>
        <div className='clearfix'>
          <section className='athlete-profile-main-profile-photo'>
            <img src={this.state.avatar} alt='profileimage'/>

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
        <p itemprop='description' className='outer-box-none'>
          {this.state.bio}

        </p>
        <Button variant='contained'><a href={this.state.stat_link}>View Players Stats</a></Button>
        </div>

        <section className='align-center message-player-panel profile-section '>
          <h6 className='outer-bottom'> Questions for {this.state.first_name} {this.state.last_name} ?</h6>
          <Button className='button button-primary full outer-bottom' variant='contained'>Message Trainer</Button>
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
          <section className='border-top'>
            <div className='contained-link-list-item '>

            </div>
          </section>
        </section>
        <Link to='/booking/'>
          <Button className='booking-button' variant='contained'>
            Get Quote
          </Button>
        </Link>

        </section>

    </div>)
    }
}

export default ProfileDetail;
