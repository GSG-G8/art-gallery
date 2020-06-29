import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import * as ROUTES from '../constants/routes';

function App() {
  const [customerAuth, setCustomerAuth] = useState(false);
  const [artistAuth, setArtistAuth] = useState(false);
  useEffect(() => {
    const { statusCode, role } = axios.get('api/v1/is-auth');
    if (statusCode === 200) {
      if (role === 'customer') {
        setCustomerAuth(true);
        setArtistAuth(false);
      } else {
        setArtistAuth(true);
        setCustomerAuth(false);
      }
    } else {
      setArtistAuth(false);
      setCustomerAuth(false);
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.HOME_PAGE}
            render={() => <h1>Welcome to Art Gallery websites</h1>}
          />
          <Route
            exact
            path={ROUTES.LOGIN_PAGE}
            render={() => <h1>Login Page</h1>}
          />
          <Route
            exact
            path={ROUTES.SIGNUP_PAGE}
            render={() => <h1>Register Page</h1>}
          />

          {customerAuth ? (
            <switch>
              <Route
                exact
                path={ROUTES.CART_PAGE}
                render={() => <h1>CART PAGE</h1>}
              />
              <Route
                exact
                path={ROUTES.CHECKOUT_PAGE}
                render={() => <h1>CHECKOUT page</h1>}
              />
              <Route
                exact
                path={ROUTES.REVIEW_PAGE}
                render={() => <h1>REVIEW PAGE</h1>}
              />
            </switch>
          ) : (
            <Route render={() => <Redirect to={ROUTES.LOGIN_PAGE} />} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
