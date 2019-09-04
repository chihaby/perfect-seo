import React from 'react'
import { Auth } from './Auth'
import { withRouter } from 'react-router-dom'

export const AuthButton = withRouter(({ history }) => (
    Auth.isAuthenticated === true
        ? <p>
            Welcome! <button onClick={() => {
            Auth.signout(() => history.push('/'))
            }}>Sign Out</button>
        </p>
        : <p>You are not logged in</p>
    ))

