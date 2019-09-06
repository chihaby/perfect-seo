import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export const Button = styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.primary ? 'red' : 'green'};
    color: white;
    padding: 7px 10px;
    :hover{
        background-color: blue;
    }
`

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
            <form >
                <Title>Login</Title>
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button type="button" onClick={this.handleLogin}>Login</button>
                {/* <Button primary> styled </Button> */}
            </form>
        )
    }
}

export default Form; 