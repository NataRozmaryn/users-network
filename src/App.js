import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Content from './Components/Content';

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

