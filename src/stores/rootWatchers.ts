import userWatcher from './User/Watcher';
import emailWatcher from './Email/Watcher';

export function* watchers(): any {
  yield userWatcher();
  yield emailWatcher();
}
