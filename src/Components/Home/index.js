import React from 'react';
import UserLoginService from '../../services/userLoginService';
import RegistrationForm from '../LoginForm/RegistrationForm';

const Home = () => {
  
  return (
    <div className="home">
      <h3>Home Page</h3>
      <p> Welcome! </p>
      <RegistrationForm/>
    </div>
  )
};

export default Home;