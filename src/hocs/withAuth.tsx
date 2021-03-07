import React, { Component } from 'react';
import { StorageManager } from "../utilities";

export const withAuth = (AppComponent: any) => {
  return class AuthWrapper extends Component<any, any> {

    constructor(props: any) {
      super(props);

      const authorized = StorageManager.get('authorized');

      this.state = {
        authenticated: authorized === 'true',
        loading: true,
        userNameStatus: false,
      };
      
      
    }

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
