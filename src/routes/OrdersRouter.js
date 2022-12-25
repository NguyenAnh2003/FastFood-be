import express from 'express';
import { isAuth } from '../../utils.js';
import {
  createOrder,
  findOrder,
  payOrder,
} from '../controllers/OrderController.js';
const orderRouter = express.Router();
orderRouter.post('/', isAuth, createOrder);
orderRouter.get('/:id', isAuth, findOrder);
orderRouter.put('/:id/pay', isAuth, payOrder);
export default orderRouter;
