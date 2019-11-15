import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

  logOutUser(e) {
    localStorage.clear();
    this.history.push('/home/')

  };


render () {
  let appUser = JSON.parse(localStorage.getItem('my-app-user'));
  console.log('here', appUser);
    return (
  <div>
    <div>
        <div className="base-nav">
            <ul className="nav-bar">
              <h3>Welcome {appUser ? appUser.username : null}</h3>
              
            </ul>
        </div>
    </div>
  </div>
  )
}
}

export default Home;
