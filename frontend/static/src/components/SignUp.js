import React, {Component} from 'react';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/api/v1/rest-auth/login/', this.state)
    .then(res => {
        console.log('res', res.data)
        localStorage.setItem('my-app-user', JSON.stringify(res.data)
      );
        this.props.history.push('/')
    })
    .catch(error => {
        console.log(error);
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

  return (
  <div className="container mt-5">
    <h1>Sign Up</h1>

    <div className='row'>
        <div className='col-sm-8'>
          <div className='card'>
            <div className='card-body'>

              <form onSubmit={this.handleSubmit}>
                <p>
                  <label htmlFor="username">Username</label>
                  <input id='username' type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='Enter username' required="required"/>
                </p>
                <p>
                  <label htmlFor="email">Email</label>
                  <input id='email' type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Enter email' required="required"/>
                </p>
                <p>
                  <label htmlFor="password">Password1</label>
                  <input id='password1' type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required="required"/>
                </p>
                <p>
                  <label htmlFor="password">Password2</label>
                  <input id='password2' type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required="required"/>
                </p>
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default SignUp;
