import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavContainer from './nav/nav-container';
import Home from './home/home';
import UserShowContainer from './user/user_show_container';
import PostPhoto from './photo/post_photo'


const App = () => (
  <div>
      <Route path="/" component={NavContainer} />
      <Route exact path="/" component={Home} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/photos/post" component={PostPhoto} />
      <ProtectedRoute exact path="/p" component={UserShowContainer} />  
    
  </div>
);

export default App;
