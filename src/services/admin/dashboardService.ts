import axios from 'axios';
import { DashboardStats } from '../../types/admin';

const API_URL = '/api/admin';

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
  },

  /**
   * Retrieves revenue data based on the specified period.
   * @param {string} period - The time period for revenue data ('daily', 'weekly', or 'monthly').
   * @returns {Promise<Object>} A promise that resolves to the revenue data.
   */
  getRevenueData: async (period: 'daily' | 'weekly' | 'monthly') => {
    const response = await axios.get(`${API_URL}/revenue?period=${period}`);
    return response.data;
  },

  getTopProducts: async () => {
    const response = await axios.get(`${API_URL}/top-products`);
    return response.data;
  },

  getRecentOrders: async () => {
    const response = await axios.get(`${API_URL}/recent-orders`);
    return response.data;
  }
};