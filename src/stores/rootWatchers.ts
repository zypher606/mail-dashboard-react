import userWatcher from './User/Watcher';

export function* watchers(): any {
  yield userWatcher();
}
