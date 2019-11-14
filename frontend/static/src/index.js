import React from 'react';
import ReactDOM from 'react-dom';

import  NavBar  from './components/NavBar';

import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import SearchLesson from './components/SearchLessons';
import LandingPage from './components/LandingPage';
import ProfileEdit from './components/ProfileEdit';
import ProfileDetail from './components/ProfileDetail';
import CheckoutForm from './components/CheckoutForm';
import Booking from './components/Booking';
import LessonList from './components/LessonList';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Elements, StripeProvider} from 'react-stripe-elements';

import { BrowserRouter as Router, Route, Switch , } from 'react-router-dom';

ReactDOM.render(
   <StripeProvider apiKey="pk_test_VemRXrMocXpHvlA1Yrs65ueB00Kl63LAn4">
      <Router>
          <NavBar />
          <Switch>
            <Route path='/booking/' component={Booking} isAuthed={true} />
            <Route path='/lesson/list' component={LessonList} />
            <Route path='/profile/detail/:id/' component={ProfileDetail} isAuthed={true} />
            <Route path='/profile/edit/' component={ProfileEdit} isAuthed={true} />
            // <Route path='/search/' component={SearchLesson} />
            <Route path='/profile/list/:lesson' component={ProfileList} isAuthed={true} />
            <Route path='/profile/new/' component={ProfileForm} isAuthed={true} />
            <Route path='/signup/' component={Signup} />
            <Route path='/login/' component={Login} />
            <Route path='/home/' render={(props) => <Home {...props} isAuthed={true} />} />
            <Route exact path ='/' component={LandingPage} />
            <Elements>
              <Route path='/checkout/:slug/' component={CheckoutForm} isAuthed={true} />
            </Elements>
        </Switch>
      </Router>
    </StripeProvider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
