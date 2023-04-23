import {
  saveFoodDB,
  unSaveFoodDB,
} from '../services/wishlist.service.js';

const saveFood = async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const user = req.body._id;
    const rs = await saveFoodDB(productId, user);
    res.status(201).send({ message: 'success save', rs });
  } catch (error) {
    console.log(error.message);
  }
};

const unSaveFood = async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const user = req.body._id;
    const res = await unSaveFoodDB(productId, user);
    res.status(201).send({ message: 'Success unsave' });
  } catch (error) {
    console.log(error);
  }
};

export { saveFood, unSaveFood };
