import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './Routes';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Art Gallery websites</h1>
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
