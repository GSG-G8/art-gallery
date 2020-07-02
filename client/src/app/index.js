import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Login from '../components/Login';
import * as ROUTES from '../constants/routes';
import Register from '../components/Register';
import Painting from '../components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} />
          <Route exact path={ROUTES.SIGNUP_PAGE} component={Register} />
          <Route
            exact
            path={ROUTES.LOGIN_PAGE}
            render={(props) => <Login {...props} />}
          />
          <Route
            path={ROUTES.ART_PAGE}
            render={(props) => <Painting {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
