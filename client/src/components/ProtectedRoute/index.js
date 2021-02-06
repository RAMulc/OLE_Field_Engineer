import React from 'react';
import { Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props =>
                    auth.isAuthenticated === true ?
                        (<Component {...props} />) : (<Redirect to="/login" />)
            }
        />
    );
};