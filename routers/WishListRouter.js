import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import WishList from '../models/WishListModel.js';
import { isAuth } from '../utils.js';
const wishListRouter = express.Router();

wishListRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await WishList.findOne({})
    } catch (error) {
      console.log(error.message);
    }
  })
);

wishListRouter.post(
  '/create',
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newItem = new WishList({
        item: req.body.item,
        productId: req.body.item._id,
        user: req.body.user,
      });
      const saveItem = await newItem.save();
      res
        .status(201)
        .send({ message: 'success', saveItem });
    } catch (error) {
      console.log(error.message);
    }
  })
);

wishListRouter.post(
  '/remove',
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      await WishList.deleteOne(
        {
          productId: req.body.productId,
          user: req.body.user,
        },
        (err) => console.log(err)
      );
    } catch (error) {
      console.log(error.message);
    }
  })
);

export default wishListRouter;
