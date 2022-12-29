import Order from '../models/order.schema.js';
import {
  createOrderDB,
  findOrderDB,
  payOrderService,
} from '../services/order.service.js';

export const createOrder = async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const { _id } = req.user;

  try {
    const rs = await createOrderDB({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      _id,
    });
    res
      .status(201)
      .send({ message: 'New Order created', rs });
  } catch (error) {
    console.log(error.message);
  }
};

export const findOrder = async (req, res, next) => {
  const id = req.params.id;
  try {
    const rs = await findOrderDB(id);
    res.send(id);
  } catch (error) {
    console.log(error);
  }
};

export const payOrder = async (req, res, next) => {
  const { update_times, id, status, email_address } =
    req.body;
  try {
    const rs = await payOrderService(
      id,
      status,
      update_times,
      email_address
    );
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
};

