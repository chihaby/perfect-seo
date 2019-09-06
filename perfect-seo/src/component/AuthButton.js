import React from 'react'
import { Auth } from './Auth'
import { withRouter } from 'react-router-dom'

// const Button = styled.button`
//     font-family: sans-serif;
//     font-size: 1.3rem;
//     border: none;
//     border-radius: 5px;
//     /* background-color: ${props => props.primary ? 'red' : 'green'}; */
//     color: white;
//     padding: 7px 10px;
//     :hover{
//         background-color: blue;
//     }

export const AuthButton = withRouter(({ history }) => (
    Auth.isAuthenticated === true
        ? <p>
            Welcome! <button onClick={() => {
            Auth.signout(() => history.push('/'))
            }}>Sign Out</button>
        </p>
        : <p>You are not logged in</p>
    ))

