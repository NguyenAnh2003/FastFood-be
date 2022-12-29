import WishList from '../models/wishlist.schema.js';

// save in wishlist table with user id
const saveFoodDB = async (item, productId, user) => {
  try {
    const newItem = new WishList({
      item: item,
      productId: productId,
      user: user,
    });
    const saveItem = await newItem.save();
    res.status(201).send({ message: 'success', saveItem });
  } catch (error) {
    console.log(error.message);
  }
};

// remove in wishlist table with user id
const unSaveFoodDB = async (productId, user) => {
  try {
    const rs = await WishList.deleteOne(
      {
        productId: productId,
        user: user,
      },
      (err) => console.log(err)
    );
  } catch (error) {
    console.log(error.message);
  }
};

export { saveFoodDB, unSaveFoodDB };
