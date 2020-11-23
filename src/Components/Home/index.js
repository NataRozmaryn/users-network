import React from 'react';


const Home = () => {
  return (
    <div className="home">
      <h3>Home Page</h3>
      <p> Welcome {localStorage.getItem('loginForm') ? JSON.parse(localStorage.getItem('loginForm')).firstName : "" }! </p>
    </div>
  )
};

export default Home;