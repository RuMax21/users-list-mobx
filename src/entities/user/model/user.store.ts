import { makeAutoObservable, runInAction } from 'mobx';
import type { RootStore } from '../../../app/store/RootStore';
import type { User } from './user.types';
import { getUser } from '../api';

class UserStore {
  users: User[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async fetchUser() {
    try {
      const user = await getUser();
      runInAction(() => {
        this.addUser(user);
      });
    } catch (error) {
      console.error(error);
    }
  }

  get allUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    const existing = this.users.find(u => u.id === user.id);

    if (existing) throw new Error('Already the user exists');

    this.users.push(user);
  }

  removeUser(userId: string): void {
    const existing = this.users.find(u => u.id === userId);

    if (!existing) throw new Error('User not found');

    this.users = this.users.filter(u => u.id !== userId);
  }

  updateUser(userId: string, updatedData: Partial<User>): void {
    const existing = this.users.find(u => u.id === userId);

    if (!existing) {
      throw new Error('User not found');
    }

    Object.assign(existing, updatedData);
  }
}

export default UserStore;
