import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './Routes';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Art Gallery websites</h1>
      <div>مرحبا</div>
      <Router>
        <Switch>
          <Route exact path={ROUTES} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
