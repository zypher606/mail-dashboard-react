import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from './RouteMappings';

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...routeProps
}: any) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        authenticated === true ? (
          <Component authenticated={authenticated} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.DEFAULT,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
