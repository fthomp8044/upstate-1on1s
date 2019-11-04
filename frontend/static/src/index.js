import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
import SearchLesson from './components/SearchLessons';
import UserUpdate from './components/UserUpdate';
import ProfileDetail from './components/ProfileDetail';
// import SearchBar from './components/Search';

import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route, Switch , } from 'react-router-dom';

ReactDOM.render(
  // <BrowserRouter>
      <Router>
          <Switch>
            // <Route path='/profiledetail/' component={ProfileDetail} />
            <Route path='/search/' component={SearchLesson} />
            <Route path='/profile/new/' component={ProfileForm} />
            <Route path='/signup/' component={Signup} />
            <Route path='/login/' component={Login} />
            <Route path='/user/' component={UserUpdate} />
            <Route path='/home/' render={(props) => <Home {...props} isAuthed={true} />} />
        </Switch>
      </Router>
  // </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
