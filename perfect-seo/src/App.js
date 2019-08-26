import React from 'react';
import logo from './logo.svg';
import Header from './component/Header'
import ControlledCarousel from './component/ControlledCarousel'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
          <Header />
          <ControlledCarousel />
      </div>
    );
  }
}

export default App;
