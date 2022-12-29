import data from '../data/data.js';
import News from '../models/news.schema.js';
import Product from '../models/product.schema.js';

export const createDataDB = async () => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(
      data.products
    );
    await News.deleteMany({});
    const createdNews = await News.insertMany(data.news);
    return { createdProducts, createdNews };
  } catch (error) {
    console.error(error);
  }
};
