import exrpess from 'express';
import {
  userContact,
  userLogin,
  userSignup,
  userUpdate,
} from '../controllers/UserController.js';
import { authenticate } from '../middleware/Authentication.js';
const userRouter = exrpess.Router();
userRouter.post('/signin', userLogin); // generate token
userRouter.post('/signup', userSignup); // generate token
userRouter.post('/contact', userContact); // 
userRouter.put('/profile', authenticate, userUpdate);
export default userRouter;
