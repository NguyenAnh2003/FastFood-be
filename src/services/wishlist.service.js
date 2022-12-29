import WishList from '../models/wishlist.schema';

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

export { saveFoodDB };
