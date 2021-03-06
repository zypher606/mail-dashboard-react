import { Email } from '../../models/Email';

export function emailAdd(email: any): Promise<any> {
  return Promise.resolve(Email.addEmail(email));
}

export function emailFetchAll(): Promise<any> {
  return Promise.resolve(Email.getEmailsOfCurrentUser());
}

export function emailFetchThread(thread_id: string): Promise<any> {
  return Promise.resolve(Email.getEmailThread(thread_id));
}

export function emailMarkRead(payload: any): Promise<any> {
  return Promise.resolve(Email.emailMarkRead(payload));
}

export function emailMarkDelete(payload: any): Promise<any> {
  return Promise.resolve(Email.emailMarkDelete(payload));
}