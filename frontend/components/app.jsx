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
import UserEditContainer from './user/user_edit_container';
import PostPhotoContainer from './photo/post_photo_container'
import PhotosIndexContainer from './photo/photos_index_container';
import PhotoShowContainer from './photo/photo_show_container';


const App = () => (
  <div>
      <Route path="/" component={NavContainer} />
      <Route exact path="/" component={Home} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/discover" component={PhotosIndexContainer} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/photo/:photo_id" component={PhotoShowContainer} />
      <ProtectedRoute exact path="/photos/post" component={PostPhotoContainer} />
      <ProtectedRoute exact path="/p/:user_id" component={UserShowContainer} /> 
      <ProtectedRoute exact path="/p/:user_id/edit" component={UserEditContainer} />
    
  </div>
);

export default App;
