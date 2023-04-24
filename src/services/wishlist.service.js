import User from '../models/user.schema.js';
import WishList from '../models/wishlist.schema.js';

const createUserWithList = async (user) => {
  try {
    const wishlist = new WishList({
      user: user,
      products: [],
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

const getWishlistService = async (userId) => {
  try {
    const rs = await WishList.findOne({ user: userId });
    return rs;
  } catch (error) {
    console.log(error.message);
  }
};

// save in wishlist table with user id
const saveFoodDB = async (product, user) => {
  try {
    const rs = await WishList.findOneAndUpdate(
      { user: user },
      {
        $addToSet: {
          products: {
            ...product,
            productId: product._id,
          },
        },
      }
    );

    // const urs = await User.findOneAndUpdate({})
    if (rs) console.log('Success saved');
    return rs;
  } catch (error) {
    console.log('from save service', error.message);
  }
};

// remove in wishlist table with user id
const unSaveFoodDB = async (product, user) => {
  try {
    const rs = await WishList.findOneAndUpdate(
      { user: user },
      {
        $pull: {
          products: product._id,
        },
      }
    );
    if (rs) console.log('Unsaved');
    return rs;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  saveFoodDB,
  unSaveFoodDB,
  createUserWithList,
  getWishlistService,
};
