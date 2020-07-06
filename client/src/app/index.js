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
import AuthorizationContext from '../Contexts/AuthorizationContext';
import 'antd/dist/antd.css';
import Login from '../components/Login';
import Register from '../components/Register';
import Painting from '../components/Details';
import ProfilePage from '../containers/ProfilePage';
import LandingPage from '../containers/LandingPage';
import AdminDashboard from '../components/Admin';

import CartPage from '../containers/CartPage';

function App() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [customerAuth, setCustomerAuth] = useState(false);
  const [artistAuth, setArtistAuth] = useState(false);
  const [redirect, setRedirect] = useState();

  const getAuth = async () => {
    try {
      const {
        data: {
          data: { id, role },
        },
      } = await axios.get('/api/v1/is-auth');
      setUser({ id, role });
      switch (role) {
        case 'customer':
          setLogged(true);
          setCustomerAuth(true);
          setArtistAuth(false);
          setRedirect(false);
          break;
        case 'artist':
          setLogged(true);
          setArtistAuth(true);
          setCustomerAuth(false);
          setRedirect(false);
          break;
        case 'admin':
          setLogged(true);
          setRedirect(false);
          break;
        default:
          setLogged(false);
          setArtistAuth(false);
          setCustomerAuth(false);
          setRedirect(true);
      }
    } catch (err) {
      setLogged(false);
      setArtistAuth(false);
      setCustomerAuth(false);
      setRedirect(true);
    }
  };
  useEffect(() => {
    getAuth();
  }, [logged]);

  const logout = async () => {
    try {
      await axios.get('/api/v1/logout');
      setUser({});
      setLogged(false);
      setCustomerAuth(false);
      setArtistAuth(false);
      setRedirect(true);
    } catch (err) {
      setLogged(logged);
      setCustomerAuth(customerAuth);
      setArtistAuth(artistAuth);
      setRedirect(redirect);
    }
  };
  return (
    <div className="App">
      <Router>
        <AuthorizationContext.Provider value={{ user }}>
          <LogoutContext.Provider value={{ logout }}>
            <Switch>
              <Route
                exact
                path={ROUTES.HOME_PAGE}
                render={() => <LandingPage />}
              />
              <Route
                exact
                path={ROUTES.ADMIN_DASHBOARD_PAGE}
                component={AdminDashboard}
              />
              <Route
                exact
                path={ROUTES.SIGNUP_PAGE}
                render={() =>
                  !logged ? <Register /> : <Redirect to={ROUTES.HOME_PAGE} />
                }
              />
              <Route
                exact
                path={ROUTES.LOGIN_PAGE}
                render={(props) =>
                  !logged ? (
                    <Login {...props} setLogged={setLogged} />
                  ) : (
                    <Redirect to={ROUTES.HOME_PAGE} />
                  )
                }
              />

              <Route
                exact
                path={ROUTES.ARTIST_PAGE}
                render={(props) => <ProfilePage {...props} />}
              />
              <Route
                path={ROUTES.ART_PAGE}
                render={(props) => <Painting {...props} />}
              />

              {customerAuth ? (
                <Switch>
                  <Route exact path={ROUTES.CART_PAGE} component={CartPage} />
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
                </Switch>
              ) : redirect ? (
                <Redirect to={ROUTES.LOGIN_PAGE} />
              ) : (
                <Redirect to={ROUTES.HOME_PAGE} />
              )}
            </Switch>
          </LogoutContext.Provider>
        </AuthorizationContext.Provider>
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
