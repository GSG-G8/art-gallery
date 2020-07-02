import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Login from '../components/Login';
import * as ROUTES from '../constants/routes';
import ReviewPage from '../components/Review';
import Register from '../components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={ReviewPage} />
          <Route exact path={ROUTES.SIGNUP_PAGE} component={Register} />
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
