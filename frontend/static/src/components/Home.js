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
                <NavLink className="nav-link" to="/home/"><button>Home Page</button></NavLink>
                <NavLink className="nav-link" to="/search/"><button>Search</button></NavLink>
                <NavLink className="nav-link" to="/profile/new/"><button>Create Profile</button></NavLink>
                <NavLink className="nav-link" to="/profile/edit/"><button>Update user</button></NavLink>
                <NavLink className="nav-link" to="/login/"><button>Login</button></NavLink>
                <NavLink className="nav-link" to="/signup/"><button>Sign Up</button></NavLink>
                <NavLink className="nav-link" to="/logout" onClick={this.logOutUser}><button>Logout</button></NavLink>
            </ul>
        </div>
    </div>
  </div>
  )
}
}

export default Home;
