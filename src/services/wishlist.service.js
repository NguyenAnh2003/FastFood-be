import WishList from '../models/wishlist.schema.js';

const createUserWithList = async (user) => {
  try {
    const wishlist = new WishList({
      user: user,
      products: []
    });
    const rs = await wishlist.save();
    if (rs) {
      console.log('Success create save');
    } else {
      console.log('failed');
    }
    return rs;
  } catch (error) {
    console.log(error.message);
  }
};

// save in wishlist table with user id
const saveFoodDB = async (product, user) => {
  try {
    const rs = await WishList.findOneAndUpdate(
      { user },
      { $addToSet: product }
    );
    if (rs) console.log('Success saved');
  } catch (error) {
    console.log(error.message);
  }
};

// remove in wishlist table with user id
const unSaveFoodDB = async (product, user) => {
  try {
    const rs = await WishList.findOneAndUpdate(
      { user },
      { $pull: product }
    );
    if (rs) console.log('Unsaved');
  } catch (error) {
    console.log(error.message);
  }
};

export { saveFoodDB, unSaveFoodDB, createUserWithList };
