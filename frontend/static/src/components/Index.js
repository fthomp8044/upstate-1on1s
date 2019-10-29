

import React, {Component} from 'react';

class Index extends Component {

render() {
  return (
    <div className='jumbotron centered'>
      <div className='container'>
        <i className='fas fa-key fa-6x'></i>
        <h1 className='display-3'>1on1s</h1>
        <p className='lead'>Train with The Upstates finest!</p>
        <hr/>
        <a class='btn btn-light btn-lg' href='/signup' role='button'>Sign Up</a>
        <a class='btn btn-dark btn-lg' href='/login' role='button'>Login</a>
      </div>
    </div>
  )
}
}

export default Index;
