import Order from '../models/OrderModel';

export const createOrder = async (req, res, next) => {
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({
        ...x,
        product: x._id,
      })),
      shippingAddress: req.body.shippingAddress, //
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });

    const order = await newOrder.save();
    res
      .status(201)
      .send({ message: 'New Order created', order });
  } catch (error) {
    console.log(error.message);
  }
};

export const findOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: 'Order not found' });
  }
};

export const payOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_times: req.body.update_times,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.send({
      message: 'Order paid',
      order: updatedOrder,
    });
  } else {
    res.status(404).send({ message: 'Order not found' });
  }
};
