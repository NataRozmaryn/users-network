import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import IsAuthorized from './Components/isAuthorized/IsAuthorized';
import './App.css';
import UserLoginService from './services/userLoginService';
// import store from './redux/store'; 
// import {Provider} from 'react-redux';


const App = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
      setAuthorized(UserLoginService.isUserAuthorized())    
  }, []);

  return (
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <div className="app">
        <IsAuthorized.Provider value={{ authorized, setAuthorized }}>
          <Navigation /> 
          <Content authorized={authorized}/>
        </IsAuthorized.Provider> 
      </div>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;

