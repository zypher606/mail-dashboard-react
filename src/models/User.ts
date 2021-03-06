import { StorageManager } from "../utilities";
import { v4 as uuidv4 } from 'uuid';
import { hashCode } from '../utilities';

const USER_STORAGE_KEY = 'USER_COLLECTION';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  date_created: any;
}

class User {
  private static instance: User;

  constructor() {
    if (!StorageManager.get(USER_STORAGE_KEY)) {
      this.setUserCollection([]);
    }
  }

  public static getInstance(): User {
    if (!User.instance) User.instance = new User();
    return User.instance;
  }

  getUserCollection = (): IUser[] => {
    return StorageManager.get(USER_STORAGE_KEY);
  };

  setUserCollection = (collection: IUser[]) => {
    return StorageManager.set(USER_STORAGE_KEY, collection);
  };

  addUser = (user: IUser) => {
    const users: IUser[] = this.getUserCollection();
    if (!users.find(({ email }: IUser) => email === user.email)) {
      user = {...user, id: uuidv4(), password: hashCode(user.password)}
      users.push(user);
      this.setUserCollection(users);
      return user;
    }

    throw new Error('User already exist!');
  };

  validateUser = (user: IUser) => {
    const users: IUser[] = this.getUserCollection();
    const savedUser: any = users.find(({ email }: IUser) => email === user.email);

    if (!savedUser) {
      throw new Error('User not found!');
    }

    const { password, ...userRestData }: IUser = savedUser;

    if (password !== hashCode(user.password)) {
      throw new Error('Incorrect password');
    }
    return userRestData
  };
}

const userInstance = User.getInstance();

export { userInstance as User };
