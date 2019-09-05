import React from 'react';
import Home from './Pages/Home'
import { PrivateRoute } from './component/PrivateRoute'
import { Public } from './component/Public'
import { Protected } from './component/Protected'
import Login from './component/Login'
import NavBar from './component/NavBar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
