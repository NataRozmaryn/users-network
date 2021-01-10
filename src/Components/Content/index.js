
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../Loader';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import routes from '../../routes.js';

const Content = ({ authorized }) => {
  return (
    <div className="content">
      <Switch>
        <Suspense fallback={<Loader />}>
          {routes.map(({ path, isExact, component: Component, needsAuth }) => (
            needsAuth && !authorized ?
              <PrivateRoute
                authorized={authorized}
                needsAuth={needsAuth}
                path={path}
                component={Component}
                key={path}
              /> :
              <Route
                path={path}
                exact={isExact}
                component={Component}
                key={path}
              />
          )
          )}
        </Suspense>
      </Switch>
    </div>);
};
export default Content;