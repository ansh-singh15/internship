import { User } from '../../types/user';
import { storage } from '../../utils/storage';
import { STORAGE_KEYS, ADMIN_USER } from '../../utils/constants';

export const authStorage = {
  /**
   * Initializes the admin user if no admin exists in the system.
   * This method checks the stored users and adds an admin user if none is present.
   * @returns {void} This method does not return a value.
   */
  initializeAdmin: () => {
    const users = storage.get(STORAGE_KEYS.USERS) || [];
    if (!users.some((user: User) => user.role === 'admin')) {
      users.push(ADMIN_USER);
      storage.set(STORAGE_KEYS.USERS, users);
    }
  },

  getUsers: () => {
    return storage.get(STORAGE_KEYS.USERS) || [];
  },

  /**
   * Saves a user to the authentication storage.
   * @param {User} user - The user object to be saved.
   * @returns {void} This method does not return a value.
   */
  saveUser: (user: User) => {
    const users = authStorage.getUsers();
    users.push(user);
    storage.set(STORAGE_KEYS.USERS, users);
  },

  getCurrentUser: () => {
    return storage.get(STORAGE_KEYS.USER);
  },

  setCurrentUser: (user: User) => {
    storage.set(STORAGE_KEYS.USER, user);
  },

  clearCurrentUser: () => {
    storage.remove(STORAGE_KEYS.USER);
  }
};