import React from 'react'

class Form extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    }

    handleLogin = () => {
        console.log("EMail: " + this.state.email);
        console.log("Password: " + this.state.password);
    }

    render() {
        return (
            <form>
                <h4>Form</h4>
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button type="button" onClick={this.handleLogin}>Login</button>
            </form>
        )
    }
}

export default Form;