
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../NotFound';

import routes from '../../routes.js';

const Content = () => (
  <div className="content">

    <Switch>
      {routes.map(({ path, isExact, component: Component }) => (
        <Route path={path} exact={isExact} component={Component} key={path} />
      ))}

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;