import React from 'react';
// import logo from './logo.svg';
import Header from './component/Header'
import NavBar from './component/NavBar'
import Carousel from './component/Carousel'
import Form from './component/Form'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Carousel style={{
          boxSizing: "border-box",
          background: "white",
          height: "50vh",
          width: "50vw",
          textAlign: "center",
          margin: "auto"
        }} />
        <Form />
      </div>
    );
  }
}

export default App;
