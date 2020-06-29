import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from '../components/common/Navbar';
import * as ROUTES from '../constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={NavbarComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
