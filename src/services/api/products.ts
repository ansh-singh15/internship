import axios from 'axios';
import { Product, ProductFormData } from '../../types/product';

const API_URL = '/api/products';

export const productApi = {
  /**
   * Retrieves all products from the API
   * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects
   */
  getAll: async (): Promise<Product[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  /**
   * Retrieves a product by its ID from the API.
   * @param {string} id - The unique identifier of the product.
   * @returns {Promise<Product>} A promise that resolves to the product object.
   */
  getById: async (id: string): Promise<Product> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  /**
   * Creates a new product by sending a POST request to the API
   * @param {ProductFormData} data - The product data to be created
   * @returns {Promise<Product>} A promise that resolves to the created product
   */
  create: async (data: ProductFormData): Promise<Product> => {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  /**
   * Updates a product with the given ID using the provided data
   * @param {string} id - The unique identifier of the product to update
   * @param {ProductFormData} data - The new data to update the product with
   * @returns {Promise<Product>} A promise that resolves to the updated product
   */
  update: async (id: string, data: ProductFormData): Promise<Product> => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  /**
   * Deletes a resource by its ID
   * @param {string} id - The unique identifier of the resource to delete
   * @returns {Promise<void>} A promise that resolves when the deletion is complete
   */
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
};