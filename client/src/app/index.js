import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Login from '../components/Login';
import * as ROUTES from '../constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} />
          <Route
            exact
            path={ROUTES.LOGIN_PAGE}
            render={(props) => <Login {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
