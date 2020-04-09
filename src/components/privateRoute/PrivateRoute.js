import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom'
import { UserContext } from '../useAuth';


const PrivateRoute = ({ children, ...rest }) => {
  const {isAuth} = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;