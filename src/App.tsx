import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navigation, Sidebar } from './components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';
import { MailboxScreen, MailThreadScreen, LoginScreen} from './screens';
import appStore from "./stores";
import { Provider } from "react-redux";
import { AppRouter } from "./appRoutes";
import { withAuth } from "./hocs/withAuth";

const App = (props: any): JSX.Element => {
  return (
    <Provider store={appStore}>
      <MuiThemeProvider theme={theme}>
        <AppRouter authenticated={props.authenticated} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
