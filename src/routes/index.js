import express from 'express';
import {
  createData,
  createOrder,
  findOrder,
  getAllPost,
  getCatgories,
  getProducts,
  getSinglePost,
  getSingleProduct,
  getSpecialFood,
  loadData,
  payOrder,
  userContact,
  userLogin,
  userSignup,
  userUpdate,
} from '../controllers/index.js';
import {
  getWishlist,
  saveFood,
  unSaveFood,
} from '../controllers/wishlist.controller.js';
import { authenticate } from '../middleware/authentication.middleware.js';

const routes = express.Router();

// temp
routes.get('/welcome', loadData);

// seed
routes.get('/seed', createData);

// user
routes.post('/user/signin', userLogin);
routes.post('/user/signup', userSignup);
routes.put('/user/update', authenticate, userUpdate);
routes.post('/user/contact', userContact);

// product
routes.get('/products/', getProducts);
routes.get('/products/special', getSpecialFood);
routes.get('/products/categories', getCatgories);
routes.get('/products/:id', getSingleProduct);

// post
routes.get('/posts/', getAllPost);
routes.get('/posts/:id', getSinglePost);

// order
routes.post('/orders', authenticate, createOrder);
routes.get('/orders/:id', authenticate, findOrder);
routes.put('/orders/:id/pay', authenticate, payOrder);

// wishlist
routes.post('/wishlist/save', saveFood);
routes.post('/wishlist/unsave', unSaveFood);
routes.get('/wishlist/:userId', getWishlist);

// paypal

export default routes;
