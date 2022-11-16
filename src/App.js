import './App.css';

import * as React from 'react';

import DatingCards from './components/DatingCards'
import DatingCards from './components/Header'
import DatingCards from './components/SwipeButtons'


function App() {
  return (
    <div className = "app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
