import mongoose from 'mongoose';
import { config } from './config';

/**
 * Establishes a connection to MongoDB using Mongoose.
 * @returns {Promise<mongoose.Connection>} A promise that resolves to the Mongoose connection object.
 * @throws {Error} If the connection to MongoDB fails.
 */
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};