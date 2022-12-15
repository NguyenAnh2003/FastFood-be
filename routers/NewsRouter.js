import express from 'express';
import {
  getAllPosts,
  getSinglePost,
} from '../controllers/NewsController.js';


const newsRouter = express.Router();
newsRouter.get('/', getAllPosts);
newsRouter.get('/:id', getSinglePost);

export default newsRouter;
