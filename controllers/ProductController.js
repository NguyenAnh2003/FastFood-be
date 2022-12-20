import Product from '../models/ProductModel';

export const getProducts = async (req, res, next) => {
  const PAGE_SIZE = 6;
  const page = parseInt(req.query.page || '0');
  const category = req.query.category;
  const categoryFilter =
    category && category !== 'all' ? { category } : {};

  const totalPages = await Product.countDocuments({
    ...categoryFilter,
  }); //

  // const products = await Product.find({
  //   ...categoryFilter
  // }).limit(PAGE_SIZE).skip(page * PAGE_SIZE);

  const products = await Product.find({
    ...categoryFilter,
  });

  res.send({
    totalPages: Math.ceil(totalPages / PAGE_SIZE),
    products,
  });
};

export const getCatgories = async (req, res, next) => {
  const categories = await Product.find().distinct(
    'category'
  );
  res.send(categories);
};

export const getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Not found' });
  }
};
