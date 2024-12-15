import axios from 'axios';
import { User } from '../../types/user';

const API_URL = '/api/users';

export const authApi = {
  /**
   * Authenticates a user with their email and password
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   * @returns {Promise<User>} A promise that resolves to the authenticated user object
   * @throws {Error} If the credentials are invalid
   */
  login: async (email: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const user = response.data;
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  /**
   * Registers a new user with the provided credentials.
   * @param {string} name - The name of the user to register.
   * @param {string} email - The email address of the user to register.
   * @param {string} password - The password for the user's account.
   * @returns {Promise<User>} A promise that resolves to the registered User object.
   * @throws {Error} If registration fails.
   */
  register: async (name: string, email: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      const user = response.data;
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  /**
   * Logs out the current user by removing authentication data from local storage.
   * @returns {Promise<void>} A promise that resolves when the logout process is complete.
   */
  logout: async (): Promise<void> => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Retrieves the current user from local storage
   * @returns {User | null} The current user object if found, or null if not found
   */
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAdmin: (): boolean => {
    const user = authApi.getCurrentUser();
    return user?.role === 'admin';
  }
};