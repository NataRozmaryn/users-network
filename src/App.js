import React, { Component, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Content from './Components/Content';

import './App.css';


class App extends Component {
  render() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <div className="app">
            <Navigation />
            <Content />
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;

