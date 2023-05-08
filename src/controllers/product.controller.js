import {
  getCatgoriesDB,
  getProductsDB,
  getSingleProductDB,
  getSpecialFoodDB,
} from '../services/product.service.js';

export const getProducts = async (req, res) => {
  const { page, category } = req.body;
  const rs = await getProductsDB(page, category);
  res.send(rs);
};

export const getSpecialFood = async (req, res) => {
  const { id } = req.params;
  try {
    const rs = await getSpecialFoodDB(id);
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
};

export const getCatgories = async (req, res) => {
  const rs = await getCatgoriesDB();
  res.send(rs);
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const rs = await getSingleProductDB(id);
    if (rs) {
      res.status(201).send({ message: 'FOUND', rs });
    } else {
      console.log('NOT FOUND');
    }
  } catch (error) {
    console.log(error);
  }
};
