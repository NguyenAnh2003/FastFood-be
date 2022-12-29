import News from '../models/news.schema.js';
import Product from '../models/product.schema.js';

export const loadDataHome = async () => {
  const products = await Product.find({
    new: true,
  });

  const news = await News.find();
  return { products, news };
};

