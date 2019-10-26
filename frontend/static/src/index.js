import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StripeProvider} from 'react-stripe-elements';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
// ReactDOM.render(
//   <Router>
//       <Switch>
//         <Route path='/login/' component={Login} />
//         <Route path='/recipes/new/' component={RecipeForm} />
//         <Route exact path='/' component={RecipeList} />
//     </Switch>
//   </Router>
//   , document.getElementById('root')
// );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
