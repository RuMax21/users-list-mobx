import { makeAutoObservable } from 'mobx';
import UserStore from '../../entities/user/model/user.store';

class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
    makeAutoObservable(this);
  }
}

export type { RootStore };
export const rootStore = new RootStore();
