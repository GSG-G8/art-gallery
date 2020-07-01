import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import PageNotFound from '../components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
