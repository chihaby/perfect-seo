import React from 'react';
// import logo from './logo.svg';
import Header from './component/Header'
import NavBar from './component/NavBar'
import Carousel from './component/Carousel'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

export default App;
