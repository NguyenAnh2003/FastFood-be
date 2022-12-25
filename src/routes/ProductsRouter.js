import express from 'express';
import {
  getCatgories,
  getProducts,
  getSingleProduct,
} from '../controllers/ProductController.js';

const productRouter = express.Router();
productRouter.get('/', getProducts);
productRouter.get('/categories', getCatgories);
productRouter.get('/:id', getSingleProduct);


export default productRouter;
