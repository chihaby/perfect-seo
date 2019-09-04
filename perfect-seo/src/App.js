import React from 'react';
import Home from './Pages/Home'
import { AuthButton } from './component/AuthButton'
import { PrivateRoute } from './component/PrivateRoute'
import { Public } from './component/Public'
import { Protected } from './component/Protected'
import Login from './component/Login'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Router>
          <div>
            <AuthButton />
            <ul>
              <li><Link to='/public'>Public Page</Link></li>
              <li><Link to='/protected'>Protected Page</Link></li>
            </ul>
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
