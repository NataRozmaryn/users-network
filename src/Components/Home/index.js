import React, { useState, useEffect } from 'react';
import LoginForm from '../LoginForm/LoginForm';

const Home = () => {
  const [authorized, SetAuthorized] = useState(false);

  useEffect(() => {
    let ls = localStorage.getItem('loginForm') || '';
    let isAuthorized = ls ? true: false;
    SetAuthorized(isAuthorized);
  }, []);

  const Logout = () => {
    SetAuthorized(!authorized);
    localStorage.removeItem('loginForm');
  }

  return (
    <div className="home">
      <h3>Home Page</h3>
      {!authorized ? <LoginForm /> : <button onClick={Logout}>Logout</button>}
    </div>
  )
};

export default Home;