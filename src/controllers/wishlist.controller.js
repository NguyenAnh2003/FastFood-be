import {
  saveFoodDB,
  unSaveFoodDB,
} from '../services/wishlist.service';

const saveFood = async (req, res, next) => {
  try {
    const item = req.body.item;
    const productId = req.body.item._id;
    const user = req.body.user;
    const rs = await saveFoodDB(item, productId, user);
    res.status(201).send({ message: 'success', rs });
  } catch (error) {
    console.log(error.message);
  }
};

const unSaveFood = async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const user = req.body.user;
    const res = await unSaveFoodDB(productId, user);
    res.status(201).send({ message: 'Success unsave' });
  } catch (error) {
    console.log(error);
  }
};

export { saveFood, unSaveFood };
