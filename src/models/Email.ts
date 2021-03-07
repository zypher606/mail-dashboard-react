import { StorageManager } from "../utilities";
import { v4 as uuidv4 } from 'uuid';
import { hashCode } from '../utilities';

const EMAIL_STORAGE_KEY = 'EMAIL_COLLECTION';

interface IEmail {
  id: string;
  from: string;
  to: string;
  thread_id: string;
  subject: string;
  body: string;
  date_created: any;
  is_read: boolean;
}

class Email {
  private static instance: Email;

  constructor() {
    if (!StorageManager.get(EMAIL_STORAGE_KEY)) {
      this.setEmailCollection([]);
    }
  }

  public static getInstance(): Email {
    if (!Email.instance) Email.instance = new Email();
    return Email.instance;
  }

  getEmailCollection = (): IEmail[] => {
    return StorageManager.get(EMAIL_STORAGE_KEY);
  };

  setEmailCollection = (collection: IEmail[]) => {
    return StorageManager.set(EMAIL_STORAGE_KEY, collection);
  };

  addEmail = (email: IEmail) => {
    email.id = uuidv4();
    if (!email.thread_id) {
      email.thread_id = uuidv4();
    }
    email.is_read = false;

    const emails: IEmail[] = this.getEmailCollection();
    emails.push(email);
    this.setEmailCollection(emails);
    return email;
  }

  getEmailsOfCurrentUser = () => {
    const { email: email_id }: any = StorageManager.get('currentUser');
    const emails: IEmail[] = this.getEmailCollection();
    const filteredEmails: IEmail[] = emails.filter(({to}) => to === email_id );
    return filteredEmails;
  }

  getEmailsGroupedByThread = () => {
    const { email: email_id }: any = StorageManager.get('currentUser');

    console.log("===============>", {email_id})
    const emails: IEmail[] = this.getEmailCollection();
    const filteredEmails: IEmail[] = emails.filter(({to}) => to === email_id );
    const result: any = {};
    for (const email of filteredEmails) {
      if (email.thread_id in result) {
        result[email.thread_id].push(email);
      } else {
        result[email.thread_id] = [email];
      }
    }
    return result;
  }

  fetchCurrentSession = () => {
    const user = StorageManager.get('currentUser');
    if (user) return user;
    throw new Error('Session not found or expired!')
  }
}

const emailInstance = Email.getInstance();

export { emailInstance as Email };