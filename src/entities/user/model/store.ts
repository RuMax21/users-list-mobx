import { makeAutoObservable, runInAction } from 'mobx';
import type { RootStore } from '../../../app/store/RootStore';
import type { User } from './types';
import { getUser } from '../api';

class UserStore {
  users: User[] = [];
  rootStore: RootStore;
  isLoading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async fetchUser() {
    this.isLoading = true;

    try {
      const user = await getUser();
      runInAction(() => {
        const existing = this.users.find(u => u.id === user.id);
        if (!existing) {
          this.users = [...this.users, user];
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  get allUsers(): User[] {
    return this.users;
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
