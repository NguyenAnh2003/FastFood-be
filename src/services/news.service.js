import News from '../models/news.schema.js';

const getAllPostsDB = async () => {
  try {
    const posts = await News.find();
    return posts;
  } catch (error) {
    console.error(error);
  }
};

const getSinglePostDB = async (id) => {
  try {
    const post = await News.findById(id);
    return post ? post : null;
  } catch (error) {
    console.error(error);
  }
};

export { getAllPostsDB, getSinglePostDB };
