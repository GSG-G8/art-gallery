import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Register from '../components/Register';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} />
          <Route exact path={ROUTES.SIGNUP_PAGE} component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
