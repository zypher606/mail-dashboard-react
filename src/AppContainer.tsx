import React, { useState, useEffect } from 'react';

import { StorageManager } from './utilities';
import { connect } from './stores';
import { withRouter } from 'react-router-dom';

interface IAppContainerProps {
  children: JSX.Element | JSX.Element[];
  authenticated: boolean;
  history: any;
  user: any;
  location: any;
}

export const AppContainer = withRouter<any, any>(
  connect()<any>((props: IAppContainerProps) => {
    const {
      children,
      history,
      user,
      location,
    } = props;


    const { pathname } = location;
    return (
      <div>
        {/* {networkActivity.inProgress && pathname.includes('select-payment-method') && <AppLoader />} */}
        
        {children}
      </div>
    );
  })
);
