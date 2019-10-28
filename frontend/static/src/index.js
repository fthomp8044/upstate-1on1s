import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './components/SignUp';
import Index from './components/Index';
import Login from './components/Login';

import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
        <Route path='/signup/' component={SignUp} />
        <Route path='/login/' component={Login} />
        <Route exact path='/' component={Index} />
    </Switch>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
