// functional

import {
  getAllPostsDB,
  getSinglePostDB,
} from '../services/news.service.js';

const getAllPost = async (req, res, next) => {
  try {
    const result = await getAllPostsDB();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

const getSinglePost = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await getSinglePostDB(id);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

export { getAllPost, getSinglePost };
