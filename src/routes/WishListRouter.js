import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import WishList from '../models/WishListModel.js';
import { saveFoodDB } from '../services/wishlist.service.js';
const wishListRouter = express.Router();

wishListRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await WishList.findOne({});
    } catch (error) {
      console.log(error.message);
    }
  })
);

wishListRouter.post(
  '/create',
  expressAsyncHandler(async (req, res) => {
    const item = req.body.item;
    const productId = req.body.item._id;
    const user = req.body.user
    try {
      const rs = await saveFoodDB()
      res
        .status(201)
        .send({ message: 'success', rs });
    } catch (error) {
      console.log(error.message);
    }
  })
);

wishListRouter.post(
  '/remove',
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
