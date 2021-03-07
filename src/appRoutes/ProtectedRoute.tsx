import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from './RouteMappings';
import { StorageManager } from "../utilities";
import { userSessionFetch } from "../stores/actions";

export const ProtectedRoute = ({
  component: Component,
  isProtected,
  ...routeProps
}: any) => {

  const authorized = StorageManager.get('authorized');
  const authenticated = authorized === 'true';

  if (authenticated) {
    userSessionFetch();
  }

  return (
    <Route
      {...routeProps}
      render={(props) =>
        authenticated === true ? (
          isProtected === true ? (
            <Component authenticated={authenticated} {...props} />
          ): (
            <Redirect
              to={{
                pathname: Routes.MAILBOX,
                state: { from: props.location },
              }}
            />
          )
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
