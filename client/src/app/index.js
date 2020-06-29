import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import * as ROUTES from '../constants/routes';
import LogoutContext from '../Contexts/LogoutContext';

function App() {
  const [customerAuth, setCustomerAuth] = useState(false);
  const [artistAuth, setArtistAuth] = useState(false);
  const [redirect, setRedirect] = useState(true);
  useEffect(() => {
    try {
      const { role } = axios.get('api/v1/is-auth');
      switch (role) {
        case 'customer':
          setCustomerAuth(true);
          setArtistAuth(false);
          setRedirect(false);
          break;
        case 'artist':
          setArtistAuth(true);
          setCustomerAuth(false);
          setRedirect(false);
          break;
        default:
          setArtistAuth(false);
          setCustomerAuth(false);
          setRedirect(true);
      }
    } catch (err) {
      setArtistAuth(false);
      setCustomerAuth(false);
      setRedirect(true);
    }
  });

  const logout = async () => {
    try {
      await axios.get('api/v1/logout');
      setCustomerAuth(false);
      setArtistAuth(false);
      setRedirect(true);
    } catch (err) {
      setCustomerAuth(customerAuth);
      setArtistAuth(artistAuth);
      setRedirect(redirect);
    }
  };

  return (
    <div className="App">
      <Router>
        <LogoutContext.Provider value={{ logout }}>
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

            <Route
              exact
              path={ROUTES.ARTIST_PAGE}
              render={(props) => (
                <h1>Welcome to Artist {props.match.params.artistId} Page</h1>
              )}
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
            ) : redirect ? (
              <Route render={() => <Redirect to={ROUTES.HOME_PAGE} />} />
            ) : null}
          </Switch>
        </LogoutContext.Provider>
      </Router>
    </div>
  );
}

App.defaultProps = {
  match: undefined,
};

App.propTypes = {
  match: PropTypes.string,
};
export default App;
