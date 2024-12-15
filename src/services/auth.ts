import { User } from '../types/user';

// Mock API endpoints - replace with real API calls in production
export const authService = {
  /**
   * Asynchronously logs in a user with the provided email and password.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise<User>} A promise that resolves to a User object if login is successful.
   * @throws {Error} Throws an error if the credentials are invalid.
   */
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@example.com' && password === 'password') {
          const user = {
            id: '1',
            name: 'Demo User',
            email: email,
            role: 'user' as const
          };
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  /**
   * Registers a new user with the provided name, email, and password.
   * @param {string} name - The name of the user to register.
   * @param {string} email - The email address of the user to register.
   * @param {string} password - The password for the user's account.
   * @returns {Promise<User>} A promise that resolves to the newly created User object.
   */
  register: async (name: string, email: string, password: string): Promise<User> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          id: Date.now().toString(),
          name,
          email,
          role: 'user' as const
        };
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('user');
  },

  /**
   * Retrieves the current user from local storage
   * @returns {User | null} The current user object if it exists in local storage, or null if no user is found
   */
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};