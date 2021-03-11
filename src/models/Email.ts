import { StorageManager } from "../utilities";
import { v4 as uuidv4 } from 'uuid';
import { hashCode } from '../utilities';

const EMAIL_STORAGE_KEY = 'EMAIL_COLLECTION';

interface IEmail {
  id: string;
  from: string;
  to: string;
  cc: string;
  received_by?: string;
  thread_id: string;
  subject: string;
  body: string;
  is_read: boolean;
  is_deleted: boolean;
  date_created: Date;
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

  addEmail = (payload: IEmail) => {
    let receivers: string[] = payload.to.split(',');
    if (payload.cc) {
      receivers = [...receivers, ...payload.cc.split(',')]
    }

    const emails: IEmail[] = this.getEmailCollection();
    for (const receiver of receivers) {
      const email = {...payload}
      email.id = uuidv4();
      if (!email.thread_id) {
        email.thread_id = uuidv4();
      }
      email.is_read = false;
      email.is_deleted = false;
      email.received_by = receiver;
      email.date_created = new Date();
      emails.push(email);
    }
    this.setEmailCollection(emails);
    
    return payload;
  }

  getEmailsOfCurrentUser = () => {
    const { email: email_id }: any = StorageManager.get('currentUser');
    const emails: IEmail[] = this.getEmailCollection();
    const filteredEmails: IEmail[] = emails.filter(({received_by, is_deleted}) => received_by === email_id && !is_deleted);
    
    return filteredEmails.sort((b: IEmail, a: IEmail) => new Date(a.date_created).getTime() - new Date(b.date_created).getTime());
  }

  getEmailThread = (threadId: string) => {
    const emails: IEmail[] = this.getEmailCollection();
    const result = emails.filter(({thread_id}: any) => thread_id === threadId);
    return result;
  }

  getEmailsGroupedByThread = () => {
    const { email: email_id }: any = StorageManager.get('currentUser');

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

  emailMarkRead = ({id}: any) => {
    let emails: IEmail[] = this.getEmailCollection();
    emails = emails.map((item: IEmail) => {
      if (item.id === id) item.is_read = true;
      return item;
    })
    this.setEmailCollection(emails);
    return 'Successful!';
  }

  emailMarkDelete = ({ids}: any) => {
    const targetIds = ids.split(',');
    let emails: IEmail[] = this.getEmailCollection();
    emails = emails.map((item: IEmail) => {
      if (targetIds.includes(item.id)) item.is_deleted = true;
      return item;
    });
    this.setEmailCollection(emails);
    return 'Successful!';
  }
}

const emailInstance = Email.getInstance();

export { emailInstance as Email };