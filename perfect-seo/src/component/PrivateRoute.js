import React from 'react'
import { Auth } from './Auth'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
            }} />
        )} />
)