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
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h3>Fotopx</h3>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
