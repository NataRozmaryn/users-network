import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import IsAuthorized from './Components/isAuthorized/IsAuthorized';

import './App.css';


const App = () => {
  const [authorized, SetAuthorized] = useState(false);

    useEffect(() => {
      let ls = localStorage.getItem('loginForm') || '';
      let isAuthorized = ls ? true : false;
      SetAuthorized(isAuthorized);
    }, []);
  
    return (
      <BrowserRouter>
        <div className="app">
          <IsAuthorized.Provider value={[authorized, SetAuthorized]}>
            <Navigation />
            <Content />
          </IsAuthorized.Provider>
        </div>
      </BrowserRouter>
    );
}

export default App;

