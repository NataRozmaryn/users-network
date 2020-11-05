import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const Navigation = () => (
  <div className="navigation">
    {routes.map(
      ({ path, isExact, label, isInMenu }) =>
        isInMenu && (
          <NavLink
            className="link"
            activeClassName="active-link"
            to={path}
            exact={isExact}
            key={path}
          >
            {label}
          </NavLink>
        ),
    )}
  </div>
);

export default Navigation;