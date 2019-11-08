import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import SearchLesson from './components/SearchLessons';
import LandingPage from './components/LandingPage';
import ProfileEdit from './components/ProfileEdit';
// import SearchBar from './components/Search';

import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route, Switch , } from 'react-router-dom';

ReactDOM.render(
      <Router>
          <Switch>
            <Route path='/profile/edit/' component={ProfileEdit} isAuthed={true} />
            <Route path='/search/' component={SearchLesson} />
            <Route path='/profile/list/:lesson' component={ProfileList} isAuthed={true} />
            <Route path='/profile/new/' component={ProfileForm} isAuthed={true} />
            <Route path='/signup/' component={Signup} />
            <Route path='/login/' component={Login} />
            <Route path='/home/' render={(props) => <Home {...props} isAuthed={true} />} />
            <Route exact path ='/' component={LandingPage} />
        </Switch>
      </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
