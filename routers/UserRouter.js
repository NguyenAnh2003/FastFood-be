import exrpess from 'express';
import { isAuth } from '../utils.js';
import {
  userContact,
  userLogin,
  userSignup,
  userUpdate,
} from '../controllers/UserController.js';
const userRouter = exrpess.Router();
userRouter.post('/signin', userLogin);
userRouter.post('/signup', userSignup);
userRouter.post('/contact', userContact);
userRouter.put('/profile', isAuth, userUpdate);
export default userRouter;





