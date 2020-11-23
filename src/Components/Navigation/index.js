import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';

import routes from '../../routes';

const Navigation = () => {
  const [auth, setAuth] = useContext(IsAuthorizedContext);
  console.log("1", IsAuthorizedContext);

  const Logout = () => {
    setAuth(false);
    localStorage.removeItem('loginForm');
  }

  return (
    <div className="navigation">
      <div>
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
        )}</div>
      {auth ?
        <Link to='' onClick={Logout} className="link" >Logout</Link> :
        <Link to={!auth ? `/login` : ""} className="link">Login</Link>
      }
    </div>
  )
};

export default Navigation;