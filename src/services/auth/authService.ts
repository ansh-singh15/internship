import { User } from '../../types/user';
import { authStorage } from './authStorage';

export const authService = {
  /**
   * Authenticates a user with the provided email and password
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   * @returns {Promise<User>} A promise that resolves to the authenticated user object without the password
   * @throws {Error} If the credentials are invalid
   */
  login: async (email: string, password: string): Promise<User> => {
    const users = authStorage.getUsers();
    const user = users.find((u: any) => 
      u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = user;
    authStorage.setCurrentUser(userWithoutPassword);
    return userWithoutPassword;
  },

  /**
   * Registers a new user in the authentication system.
   * @param {string} name - The name of the user to be registered.
   * @param {string} email - The email address of the user to be registered.
   * @param {string} password - The password for the new user account.
   * @returns {Promise<User>} A Promise that resolves to the newly created user object without the password.
   * @throws {Error} If the provided email already exists in the system.
   */
  register: async (name: string, email: string, password: string): Promise<User> => {
    const users = authStorage.getUsers();
    
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      role: 'user' as const
    };

    authStorage.saveUser(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    authStorage.setCurrentUser(userWithoutPassword);
    return userWithoutPassword;
  },

  logout: async (): Promise<void> => {
    authStorage.clearCurrentUser();
  },

  getCurrentUser: (): User | null => {
    return authStorage.getCurrentUser();
  },

  isAdmin: (): boolean => {
    const user = authStorage.getCurrentUser();
    return user?.role === 'admin';
  }
};