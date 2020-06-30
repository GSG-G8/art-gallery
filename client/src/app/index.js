import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import CartPage from '../containers/CartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} />
          <Route exact path={ROUTES.CART_PAGE} component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
