import React from 'react';
// import logo from './logo.svg';
import Header from './component/Header'
import NavBar from './component/NavBar'
import Gallery from './component/Carousel'
import Form from './component/Form'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Gallery />
        <Form />
      </div>
    );
  }
}

export default App;
