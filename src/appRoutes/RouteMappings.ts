import { Router } from '@material-ui/icons';
import {
  MailThreadScreen,
  MailboxScreen,
} from '../screens';

export const Routes = {
  DEFAULT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  MAILBOX: '/mailbox',
  MAILBOX_THREAD: (thread_id) => `/mailbox/thread/${thread_id}`,
}

export interface IRoute {
  path: string;
  component: any;
  isUserAuthenticated: boolean;
}

export const RouteMappings: IRoute[] = [
  // {
  //   path: Routes.LOGIN,
  //   component: Home,
  //   isUserAuthenticated: false,
  // },
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