// functional

import News from "../models/NewsModel.js";


export const getAllPosts = async (req, res, next) => {
  const posts = await News.find();
  res.send(posts);
};

export const getSinglePost = async (req, res, next) => {
  try {
    const post = await News.findById(req.params.id);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ message: 'Post not found' });
    }
  } catch (error) {
    console.log(error);
  }
};
