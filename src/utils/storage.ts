// Utility functions for localStorage operations
export const storage = {
  /**
   * Retrieves and parses an item from localStorage by key
   * @param {string} key - The key of the item to retrieve from localStorage
   * @returns {Object|null} The parsed JSON object if the item exists, null otherwise
   */
  get: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
};