import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-contextual';

import Template from './ui/templates/livvy/';

import Messenger from './screens/messenger';
import Marketplace from './screens/marketplace';
import Events from './screens/events';
import Maintenance from './screens/maintenance';
import Security from './screens/security';
import TestApp from './testApp';

import store from './_shared/store';

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <Template>
        <Switch>
          <Redirect exact path="/" to="/messenger" />
          <Route path="/messenger" component={Messenger} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/events" component={Events} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/security" component={Security} />
          <Route path="/test" component={TestApp} />
        </Switch>
      </Template>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
