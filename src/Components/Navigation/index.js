import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';

import routes from '../../routes';
import UserLoginService from '../../services/userLoginService';
import './navigation.scss';

const Navigation = () => {
  const { authorized, setAuthorized } = useContext(IsAuthorizedContext);

  const logout = () => {
    UserLoginService.logout().then(() => { setAuthorized(false); });
  }

  console.log("authorized", authorized);
  return (
    <div className="navigation">
      <div className="navigation__menu">

        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <div className="menu__box">
          {routes.filter(({ isInMenu }) => isInMenu).map(
            ({ path, isExact, label, needsAuth }) =>
              !authorized ? !needsAuth && (
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
        <div className="nav_right">
          {authorized ? 
            <Link to='' onClick={logout} className="link login" >logout</Link> :
            <>
              <Link to='/signup' className="link signup" >sign-up</Link>
              <Link to={!authorized ? `/login` : ""} className="link">login</Link>
            </>
          }
        </div>


      </div>
    </div>
  )
};

export default Navigation;