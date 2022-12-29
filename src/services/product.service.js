import Product from '../models/product.schema.js';

const getProductsDB = async (page, category) => {
  const PAGE_SIZE = 6;
  const pageQuery = parseInt(page || '0');
  const categoryQuery = category;
  const categoryFilter =
    categoryQuery && categoryQuery !== 'all' ? { categoryQuery } : {};

  try {
    const totalPages = await Product.countDocuments({
      ...categoryFilter,
    }); //

    // const products = await Product.find({
    //   ...categoryFilter
    // }).limit(PAGE_SIZE).skip(page * PAGE_SIZE);

    const products = await Product.find({
      ...categoryFilter,
    });
    return { products, totalPages };
  } catch (error) {
    console.log(error);
  }
};

const getSpecialFoodDB = async () => {
  try {
    const products = await Product.find({ new: true });
    if (products) return products;
  } catch (error) {
    console.log(error);
  }
};

const getCatgoriesDB = async () => {
  try {
    const categories = await Product.find().distinct(
      'category'
    );
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const getSingleProductDB = async () => {
  try {
    const product = await Product.findById(req.params.id);
    return product ? product : 'Not found';
  } catch (error) {
    console.log(error);
  }
};

export {
  getProductsDB,
  getSpecialFoodDB,
  getCatgoriesDB,
  getSingleProductDB,
};
