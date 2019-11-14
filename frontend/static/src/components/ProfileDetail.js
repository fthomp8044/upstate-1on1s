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
    <div className="container bootstrap snippet">
    <div className="row">
  	    <div className="col-sm-10"><h1>{this.state.first_name} {this.state.last_name}</h1></div>
    	<div className="col-sm-2"><a href="/users" className="pull-right"><img title="profile image" classNameName="img-circle img-responsive" src={this.state.logo} /></a></div>
    </div>
    <div className="row">
  		<div className="col-sm-3">


        <br />
      <div className="text-center">
        <img src={this.state.avatar} className="avatar img-circle img-thumbnail" alt="avatar" />
        <Button className='button button-primary full outer-bottom' variant='contained'><a href="mailto:fthomp2430@gmail.com">Message Trainer</a></Button>
      </div>
      <br />


          <ul className="list-group">
            <li className="list-group-item text-center"> <strong className="fa fa-dashboard fa-1x">Availbility</strong></li>
            <li className="list-group-item text-right"><span className="pull-left"><strong></strong></span></li>
            <li className="list-group-item text-right"><span className="pull-left"><strong></strong></span></li>
            <li className="list-group-item text-right"><span className="pull-left"><strong></strong></span></li>
            <li className="list-group-item text-right"><span className="pull-left"><strong></strong></span></li>
          </ul>

          <div className="panel panel-default">
            <div className="panel-heading">Social Media</div>
            <div className="panel-body">
            	<i className="fa fa-facebook fa-2x"></i> <i className="fa fa-github fa-2x"></i> <i className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i> <i className="fa fa-google-plus fa-2x"></i>
            </div>
          </div>

        </div>
    	<div className="col-sm-9">
            <ul className="nav nav-tabs">
                <li className="active-tabs"><a data-toggle="tab">Information</a></li>
                <li className="active-tabs"><a data-toggle="tab" href={this.state.stat_link}>Stats</a></li>
                <li className="active-tabs"><a data-toggle="tab">Training Locations</a></li>
              </ul>


          <div className="tab-content">
            <div className="tab-pane active" id="home">
                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="first_name"><h4>Name:</h4></label>
                              <p>{this.state.first_name} {this.state.last_name}</p>
                          </div>
                      </div>

                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="position"><h4>Position:</h4></label>
                              <p>{this.state.position}</p>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="mobile"><h4>Age:</h4></label>
                             <p>{this.state.age}</p>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for=""><h4>Bats/Throws:</h4></label>
                              <p>{this.state.bats}/{this.state.throws}</p>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="email"><h4>Location:</h4></label>
                              <p>{this.state.location}</p>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="password"><h4>School</h4></label>
                              <p>{this.state.school}</p>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="password"><h4>Draft Round:</h4></label>
                              <p>{this.state.draft_round}</p>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                            <label for="password2"><h4>Bio:</h4></label>
                            <p>{this.state.bio}</p>
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br/ >
                                  <Link to='/booking/'>
                                    <Button className='button button-primary full outer-bottom' variant='contained'>Get a Quote</Button>
                                </Link>
                            </div>
                      </div>
              	</form>



             </div>
             <div className="tab-pane" id="messages">

               <h2></h2>

                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                            <p>{this.state.last_name}</p>

                          </div>
                      </div>

                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br />
                              	<button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                               	<button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>

             </div>
             <div className="tab-pane" id="settings">

                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>

                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div className="form-group">

                          <div className="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br />
                                <Button className='button button-primary full outer-bottom' variant='contained'>Message Trainer</Button>
                                <Link to='booking/'>
                                <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                </Link>
                            </div>
                      </div>
              	</form>
              </div>

              </div>
          </div>

        </div>
    </div>

    )
    }
}

export default ProfileDetail;
