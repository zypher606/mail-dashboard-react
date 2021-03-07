import { User } from '../../models/User';

export function userSignin(user: any): Promise<any> {
  return Promise.resolve(User.validateUser(user));
}

export function userSignup(user: any): Promise<any> {
  return Promise.resolve(User.addUser(user));
}

export function userSessionFetch(): Promise<any> {
  return Promise.resolve(User.fetchCurrentSession());
}
