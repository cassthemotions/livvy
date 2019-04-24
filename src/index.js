import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-contextual';

import App from './app';

import Messenger from './screens/messenger';
import Marketplace from './screens/marketplace';
import Events from './screens/events';
import Maintenance from './screens/maintenance';
import Security from './screens/security';

import store from './_shared/store';

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect exact path="/" to="/messenger" />
          <Route path="/messenger" component={Messenger} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/events" component={Events} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/security" component={Security} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
