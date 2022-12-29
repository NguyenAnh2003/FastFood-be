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
import { authenticate } from '../middleware/authentication.middleware.js';

const routes = express.Router();

// temp
routes.get('/combine/home', loadData);

// seed
routes.get('/seed', createData);

// user
routes.post('/user/signin', userLogin);
routes.post('/user/signup', userSignup);
routes.post('/user/contact', userContact);
routes.post('/user/profile', authenticate, userUpdate);

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
routes.get('/:id', authenticate, findOrder);
routes.put('/:id/pay', authenticate, payOrder);

// wishlist
routes.post('/create', ) // authenticate

export default routes;
