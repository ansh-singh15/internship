import { Product, ProductFormData } from '../../types/product';
import { productApi } from '../api/products';

export const productService = {
  getAll: async (): Promise<Product[]> => {
    return await productApi.getAll();
  },

  create: async (data: ProductFormData): Promise<Product> => {
    return await productApi.create(data);
  },

  update: async (id: string, data: ProductFormData): Promise<Product> => {
    return await productApi.update(id, data);
  },

  delete: async (id: string): Promise<void> => {
    await productApi.delete(id);
  },

  /**
   * Updates the stock quantity of a product by its ID
   * @param {string} id - The unique identifier of the product
   * @param {number} quantity - The new stock quantity to set for the product
   * @returns {Promise<Product>} A promise that resolves to the updated Product object
   */
  updateStock: async (id: string, quantity: number): Promise<Product> => {
    const product = await productApi.getById(id);
    return await productApi.update(id, { ...product, stock: quantity });
  }
};