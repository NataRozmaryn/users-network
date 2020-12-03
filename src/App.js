import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import IsAuthorized from './Components/isAuthorized/IsAuthorized';
import './App.css';
import UserLoginService from './services/userLoginService';


const App = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
      setAuthorized(UserLoginService.isUserAuthorized())    
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <IsAuthorized.Provider value={{ authorized, setAuthorized }}>
          <Navigation /> 
          <Content />
        </IsAuthorized.Provider> 
      </div>
    </BrowserRouter>
  );
}

export default App;

