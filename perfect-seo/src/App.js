import React from 'react';
import Header from './component/Header'
import NavBar from './component/NavBar'
import Gallery from './component/Carousel'
import Form from './component/Form'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public files</h3>
const Protected = () => <h3>PROTECTED FILES</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    Auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <p>You must login to view this page at {from.pathname}</p>
        <button onClick={this.login}>LOGIN</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  Auth.isAuthenticated === true
    ? <p>
      Welcome! <button onClick={() => {
        Auth.signout(() => history.push('/'))
      }}>Sign Out</button>
    </p>
    : <p>You are not logged in</p>
))

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Gallery />
        <Form />
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
