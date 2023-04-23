import {
  saveFoodDB,
  unSaveFoodDB,
} from '../services/wishlist.service.js';

const saveFood = async (req, res, next) => {
  try {
    const productId = req.body.product;
    const user = req.body.userId;
    console.log('save controller', {
      productId,
      user,
    });
    const rs = await saveFoodDB(productId, user);
    if (rs) {
      res.status(201).send({ message: 'success save', rs });
    } else {
      res.status(404).send({ message: 'leave save' });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const unSaveFood = async (req, res, next) => {
  try {
    const productId = req.body.product;
    const user = req.body.userId;
    console.log('unsave food', { productId, user });
    const rs = await unSaveFoodDB(productId, user);
    if (rs) {
      res.status(201).send({ message: 'Success unsave' });
    } else {
      res.status(404).send({ message: 'UnSuccess unsave' });
    }
  } catch (error) {
    console.log(error);
  }
};

export { saveFood, unSaveFood };
