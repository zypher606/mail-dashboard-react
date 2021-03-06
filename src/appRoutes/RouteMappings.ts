import { Router } from '@material-ui/icons';
import {
  MailThreadScreen,
  MailboxScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';

export const Routes = {
  DEFAULT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  MAILBOX: '/mailbox',
  MAILBOX_THREAD: (thread_id: string) => `/mailbox/thread/${thread_id}`,
}

export interface IRoute {
  path: string;
  component: any;
  isUserAuthenticated: boolean;
}

export const RouteMappings: IRoute[] = [
  {
    path: Routes.DEFAULT,
    component: LoginScreen,
    isUserAuthenticated: false,
  },
  {
    path: Routes.LOGIN,
    component: LoginScreen,
    isUserAuthenticated: false,
  },
  {
    path: Routes.REGISTER,
    component: RegisterScreen,
    isUserAuthenticated: false,
  },
  {
    path: Routes.MAILBOX,
    component: MailboxScreen,
    isUserAuthenticated: true,
  },
  {
    path: Routes.MAILBOX_THREAD(":thread_id"),
    component: MailThreadScreen,
    isUserAuthenticated: true,
  },
]