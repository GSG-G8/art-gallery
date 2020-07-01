import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import ReviewPage from '../components/Review';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={ReviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
