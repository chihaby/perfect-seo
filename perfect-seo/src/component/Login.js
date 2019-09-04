import React from 'react'
import { Auth } from './Auth'
import { Redirect } from 'react-router-dom'

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

export default Login;