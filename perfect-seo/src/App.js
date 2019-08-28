import React from 'react';
// import logo from './logo.svg';
import Header from './component/Header'
import Carousel from './component/Carousel'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
          <Header />
          <Carousel />
      </div>
    );
  }
}

export default App;
