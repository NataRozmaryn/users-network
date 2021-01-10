import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: InputComponent, authorized, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            authorized ? (
                <InputComponent />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;