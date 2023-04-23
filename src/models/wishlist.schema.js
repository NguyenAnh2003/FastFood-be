import mongoose from 'mongoose';

const wishListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    products: [
      {
        // name image description price _id
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WishList = mongoose.model('Wishlist', wishListSchema);
export default WishList;
