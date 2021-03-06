import React, { Component } from 'react';
import { StorageManager } from "../utilities";

export const withAuth = (AppComponent: any) => {
  return class AuthWrapper extends Component<any, any> {
    state = {
      authenticated: false,
      loading: true,
      userNameStatus: false,
    };

    setUserData = (user: any) => {
      
    };

    setAuthStatusSuccess = () =>
      this.setState({
        userNameStatus: true,
      });

    onAuthSuccess = () => {
      this.setAuthStatusSuccess();
      this.setState({
        authenticated: true,
        loading: false,
      });
    };

    onAuthFailed = () =>
      this.setState({
        authenticated: false,
        loading: false,
      });

    componentDidMount() {

      const authorized = StorageManager.get('authorized');
      if (authorized) return this.onAuthSuccess();
      else return this.onAuthFailed();
    }

    render(): JSX.Element {
      const { loading } = this.state;
      return (
        <>
          <AppComponent {...this.state} {...this.props} />
        </>
      );
    }
  };
};
