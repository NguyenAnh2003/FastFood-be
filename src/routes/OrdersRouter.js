import express from 'express';
import {
  createOrder,
  findOrder,
  payOrder,
} from '../controllers/OrderController.js';
import { authenticate } from '../middleware/Authentication.js';
const orderRouter = express.Router();
orderRouter.post('/', authenticate, createOrder);
orderRouter.get('/:id', authenticate, findOrder);
orderRouter.put('/:id/pay', authenticate, payOrder);
export default orderRouter;
