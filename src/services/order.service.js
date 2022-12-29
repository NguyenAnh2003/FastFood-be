import Order from '../models/order.schema.js';

const createOrderDB = async () => {
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
    return order;
  } catch (error) {
    console.log(error);
  }
};

const findOrderDB = async (id) => {
  try {
    const order = await Order.findById(id);
    return order ? order : 'Not found';
  } catch (error) {
    console.log(error);
  }
};

const payOrderService = async (
  id,
  status,
  update_times,
  email_address
) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: id,
        status: status,
        update_times: update_times,
        email_address: email_address,
      };

      const updatedOrder = await order.save();
      return {
        message: 'Order paid',
        order: updatedOrder,
      };
    } else {
      return 'Not found';
    }
  } catch (error) {
    console.log(error);
  }
};

export { createOrderDB, findOrderDB, payOrderService };
