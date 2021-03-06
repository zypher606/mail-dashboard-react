import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { RouteMappings, IRoute } from './RouteMappings';

interface IAppRouter {
  authenticated: boolean;
}

export const AppRouter = ({ authenticated }: IAppRouter) => {
  return (
    <HashRouter>
      <Switch>
        {RouteMappings.map(
          ({ isUserAuthenticated, component: Component, path }: IRoute) => {
            if (isUserAuthenticated)
              return (
                <ProtectedRoute
                  key={path}
                  path={path}
                  exact
                  component={Component}
                  authenticated={authenticated}
                />
              );
            else
              return (
                <Route
                  key={path}
                  path={path}
                  exact
                  render={(props) => (
                    <Component authenticated={authenticated} {...props} />
                  )}
                />
              );
          }
        )}
      </Switch>
    </HashRouter>
  )
}