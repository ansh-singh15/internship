import express from 'express';
import {
  createOrder,
  getOrders,
  updateOrderStatus
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.put('/:id/status', protect, admin, updateOrderStatus);

export default router;