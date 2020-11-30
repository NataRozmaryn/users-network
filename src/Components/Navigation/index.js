import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';

import routes from '../../routes';
import UserLoginService from '../../services/userLoginService';

const Navigation = () => {  
  const {authorized, setAuthorized} = useContext(IsAuthorizedContext);

  const Logout = () => {
    UserLoginService.logout().then(() => { setAuthorized(false); });
  }

  // debugger;
  console.log("1",authorized);
  return (
    <div className="navigation">
      <div>
        {routes.filter(({isInMenu}) => isInMenu).map(
          ({ path, isExact, label, needsAuth }) => 
          !authorized && !needsAuth ? (

              <NavLink
                className="link"
                activeClassName="active-link"
                to={path}
                exact={isExact}
                key={path}
              >
                {label}
              </NavLink>
            ) : <NavLink
            className="link"
            activeClassName="active-link"
            to={path}
            exact={isExact}
            key={path}
          >
            {label}
          </NavLink>,
        )}
      </div>
      {authorized ?
        <Link to='' onClick={Logout} className="link" >Logout</Link> :
        <Link to={!authorized ? `/login` : ""} className="link">Login</Link>
      }
    </div>
  )
};

export default Navigation;